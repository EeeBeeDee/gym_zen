let stripePublicKey = document.getElementById('id_stripe_public_key').textContent.slice(1, -1)
let ClientSecret = document.getElementById('id_stripe_client_secret').textContent.slice(1, -1)
let stripe = Stripe(stripePublicKey)
let elements = stripe.elements()

console.log("hello")

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
}
let card = elements.create('card', {hidePostalCode: true, style: style})
card.mount('#card-element')

// Change default form submit behaviour

let form = document.getElementById('payment-form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    // Grab the cs
    let csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;
})