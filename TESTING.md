# TESTING

## Validation and Linting 

### HTML

[W3C - HTML](https://validator.w3.org/)

The website was run through the validator by URL instead of file to avoid issues with Django's variables and extends used in its templates.

Any of the pages which required login could not be checked by URI, so I pasted the test into the validator instead. These pages include the add_product and edit_product pages

Please find all HTML validation screenshots [here.](/documentation/HTML-VALIDATION.md)

---

### CSS

[Jigsaw - CSS](https://jigsaw.w3.org/css-validator/)

The website only has two CSS files being served on the html page. One of the great benefits I find with sass is the fact that while editing you can break down the file structure for your styles how ever you like. Then when it is time for the page to be served it is only a hand ful of pages. The error in the style.css file is due to the psudo-selector ::-web-kit-outer-spin. Unfortunately this was the only way for me to create the desired effect and upon a quick search about the issue I found that is isn't harmful towards performance.

The second file is a custom package of bootstrap styles made available by using SASS. This is one of the main reasons why I wanted to use SASS. I have found bootstrap to be a bit bloated and have at multiple points found myself having to overwrite some of their styles using "!important" beside values. This practice allows me to just use the bootstrap styles I want like the grid and spacing classes.

I have included them here in this TESTING file as there is only Two.

<details> 
<summary>
style.css
</summary>

![style.css](/documentation/jigsaw-style.png)
</details>

<details> 
<summary>
custom-bootstrap.css
</summary>

![custom-bootstrap.css](/documentation/jigsaw-bootstrap.png)
</details>

---

### JavaScript

[JSHint - JS](https://jshint.com/)

The website features 4 JS files. 

stripe.js is used to control the payment conformation before an order is processed. It is also used to instantiate a card payment module on the checkout page

change-qty.js is a small file used to affect the amount of a number inputs value. Giving the user the option to increment the amount using the mouse instead of typing in the number.

scroll_animations.js controls the movement and animations in the nav bar. It also controls the messages div to let the user know when an action was unsuccessful or not.

home_animations.js controls the few animations found on the home page. I have always been told you have to make the most of when you get someones attention, as you don't know how long you will have it for. So I tried to put a little extra care into making the homepage eye catching.

home_animations.js has a warning for unidentified variables but they are defined and also used in the function, so I am not too sure what the issue is there.

All other files passed through JSHint completely clean.

I have included them here is this TESTING file for convenience.



<details> 
<summary>
stripe.js
</summary>

![stripe.js](/documentation/js-stripe.png)
</details>

<details> 
<summary>
change-qty.js
</summary>

![change-qty.js](/documentation/js-change_qty.png)
</details>

<details> 
<summary>
scroll_animations.js
</summary>

![scroll_animations.js](/documentation/js-scroll_animations.png)
</details>

<details> 
<summary>
home_animations.js
</summary>

![home_animations](/documentation/js-home_animations.png)
</details>

---

### Python 

[CI Linter](https://pep8ci.herokuapp.com/)

I did not Lint any files that had 0 changes to them after they were generated by Django. This includes some admin.py files etc.

All custom files were passed through Code Institutes liniting app and all were returned as PEP8 compliant. 

You can find Screenshots of all validation [Here.](/documentation/PEP8-VALIDATION.md)

---

## Manual Testing 

### Homepage & Nav

Feature Tested | Expected Result | Pass/Fail
---------------|-----------------|-----------
Homepage background img responsiveness | Img and filter look and size correct at all widths | &check;
Hero responsiveness | Hero blurb resizes accordingly | &check;
Quotes Feature | Draws quotes from the quote model accordingly | &check;
Carousel Feature | Looks good at all sizes and its shape is responsive | &check;
Navbar options | Navbar options changed depending on users logged in/out status | &check;
Navbar responsiveness | At all size looks appropriate  | &check;
Nav responsiveness | Only at the large breakpoint are the mouse effects active   | &check;
Footer responsiveness | Footer is sized correctly at all widths down to 350px | &check;

### Accounts 

Feature Tested | Expected Result | Pass/Fail
---------------|-----------------|-----------
Registration | A new account can be made with the site | &check;
Login | An already registered account can be logged into | &check;
Logout | A user can log out of the account they are signed into | &check;

### Product

Feature Tested | Expected Result | Pass/Fail
---------------|-----------------|-----------
Product view | All products from the product model are viewable | &check;
category selectors | Category selectors to refine your view work as they should | &check;
Straight to checkout | Button simultaneously adds to bag and bring you to checkout | &check;
Random Featured | On both product and product detail you get a selection of random items suggested to you | &check;
Random Featured | On both product and product detail you get a selection of random items suggested to you | &check;
Breadcrumb | Breadcrumb above product detail to lead back to products or its category | &check;
Quantity control | Quantity of items added to the bag can be controlled | &check;


### Bag

Feature Tested | Expected Result | Pass/Fail
---------------|-----------------|-----------
View Items | All items in current session available to see on bag page | &check;
Price Breakdown | Both Item totals and grand total a viewable | &check;
Update bag item | Quantity of bag items can be updated on this screen | &check;
Delete bag item | Bag item can be Deleted on this screen | &check;
quickview | Customer can always see easily through nav how many items are in the bag | &check;

### Checkout

Feature Tested | Expected Result | Pass/Fail
---------------|-----------------|-----------
Order Summary | Customers can clearly see what they are about to pay for | &check;
Price Breakdown | Both Item totals and grand total a viewable | &check;
Stripe integration | stripes api is contactable from this page | &check;
Stripe Validation | Stripe will return with valid or invalid payments on this screen | &check;
Form Validation | From will not validate and process order until card validation is received | &check;
Delete bag item | Bag item can be Deleted on this screen | &check;
quickview | Customer can always see easily through nav how many items are in the bag | &check;
conformation | Customer gets an alert, an email and a success page with all important email pertaining to their order | &check;

### Admin

Feature Tested | Expected Result | Pass/Fail
---------------|-----------------|-----------
Product Creation | Superuser can create a completely new product using frontend form | &check;
Product Update | Superuser can update an existing product using frontend form | &check;
Product Deletion | Superuser can delete an existing product using frontend Button | &check;


