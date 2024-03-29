/* jshint esversion: 11 */

let stripePublicKey = document.getElementById('id_stripe_public_key').textContent.slice(1, -1);
let clientSecret = document.getElementById('id_stripe_client_secret').textContent.slice(1, -1);
let stripe = Stripe(stripePublicKey);
let elements = stripe.elements();


// Custom styling and instantiating the card Element

let style = {
    base: {
        color: '#000',
        fontFamily: '"Ubuntu", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#dc3545',
        iconColor: '#dc3545'
    }
};
let card = elements.create('card', {hidePostalCode: true, style: style});
card.mount('#card-element');

// Create realtime error handling on the card element

card.addEventListener('change', function (e) {
    let errorDiv = document.getElementById('card-errors');
    if (e.error) {
        let html = `
        <span class="icon" role="alert">
            <i class="fas fa-times"></i>
        </span>
        <span>${e.error.message}</span>
        `;
        errorDiv.innerHTML = html;
    } else {
        errorDiv.textContent = '';
    }
});

// Change default form submit behaviour

let form = document.getElementById('payment-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    card.update({'disabled': true});
    let submitBtn = document.getElementById('submit-button');
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                name: form.full_name.value.trim(),
            }
        }
    }).then((result) => {
        if (result.error) {
            let errorDiv = document.getElementById('card-errors');
            let html = `
            <span class="icon" role="alert">
                <i class="fas fa-times"></i>
            </span>
            <span>${result.error.message}</span>
            `;
            errorDiv.innerHTML = html;
            card.update({'disabled': false});
            submitBtn.disabled = false;
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                form.submit();
            }
        }
    });

    
});

