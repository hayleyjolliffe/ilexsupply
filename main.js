/*



        FINAL PROJECT
        for INFO-1251 + INFO-1272
        || 'Ilex Supply Co.' Store Concept
        || Due Dec. 17, 2021 @ 11:59PM
        || main.js
        Hayley Jolliffe — 2021

        Update: Due Dec. 19, 2021 @ 11:59PM



*/

/*

    CONSTRUCTORS

*/
// Creating 'function Store()'
// 'Used for structuring the item data in your online store'
function Store(id, n, p, q, m, c, s, r, d, i)
{
    this.id = id;                   // String
    this.name = n;                  // String
    this.price = p;                 // Number
    this.quantityOnHand = q;        // Number
    this.maximumPerCustomer = m;    // Number
    this.category = c;              // String
    this.costOfShipping = s;        // Number
    this.reviews = r;               // Array
    this.description = d;           // String
    this.image = i;                 // String
}

// Creating 'function Cart()'
// 'Used for storing relevant item data specifically for items in the cart'
function Cart(i, p, q, s)
{
    this.id = i;                    // String
    this.price = p;                 // Float
    this.quantity = q;              // Integer
    this.shipping = s;              // Float
}

/*

    GLOBAL VARIABLES

*/
// Creating 'aStore' to hold the store's items
var aStore = [];

// Creating 'aCart' to hold the cart's items
var aCart = [];

/*

    FUNCTIONS

*/
// Creating 'function initialize()'
/*
    PARAMETERS:
    > 'Display the current day/time to the screen'
    > 'Populate the store items array with AT LEAST 15 store object items
       with varying data (different categories, quantities, etc.)
    > Call your function that will display the store items array (Step 4)
    > Call your function that will display the cart items array (Step 5)
*/
function initialize()
{
    /*
        POPULATING STORE INVENTORY
        Format: new Store(id, n, p, q, m, c, s, r, d, i)
    */
    // Log before populating
    console.log(aStore);
    
    // Item 001 — Pokemon Celebrations Pikachu Card
    aStore.push("P025", "Pokemon Celebrations Pikachu Card", "9.99", "");
    // Item 002 — Dungeons & Dragons
    aStore.push("D");
    // Item 003 — Catan: 
    aStore.push("C");
    // Item 004 — Magic: The Gathering
    aStore.push("M");
    // Item 005 — Pokemon Celebrations Dialga Card
    aStore.push("P483", "Pokemon Celebrations Dialga Card", "9.99");
    // Item 006 — Dungeons & Dragons
    aStore.push("D");
    // Item 007 — Pokemon Celebrations Zekrom Card
    aStore.push("P644", "Pokemon Celebrations Zekrom Card", "14.99", "");
    // Item 008 — Dungeons & Dragons
    aStore.push("D");
    // Item 009 — Catan: 
    aStore.push("C");
    // Item 010 — Pokemon Celebrations Ho-Oh Card
    aStore.push("P250", "Pokemon Celebrations Ho-Oh Card", "9.99");
    // Item 011 — Magic: The Gathering
    aStore.push("M");
    // Item 012 — Dungeons & Dragons
    aStore.push("D");
    // Item 013 — Catan: 
    aStore.push('C');
    // Item 014 — Pokemon Celebrations Palkia Card
    aStore.push("P484", "Pokemon Celebrations Palkia Card", "9.99", "");
    // Item 015 — Dungeons & Dragons
    aStore.push("D");

    // Log after populating
    console.log(aStore);
}

// Creating 'function displayItems()'
/*
    PARAMETERS:
    > 'Display the store items array in a dynamically generated table'
       (or something similar, like a card-grid system)
    > Properties to display: id, name, price, quantity on hand, max per
      customer, category, image
    > Price displayed using selected currency (Step 7)
    > Call when page loads (from 'initialize()')
    > Call when user changes the item category
*/
function displayItems()
{

}

// Creating 'function displayCart()'
/*
    PARAMETERS:
    > 'Display the cart items array'
    > Call when user adds/removes items from the cart
    > Output "No items in cart" if nothing is in the cart
    > Output for each item: [id, price, quantity, (price * qty)]
    > Displayed using selected currency
*/
function displayCart()
{

}

// Creating 'function calculateCart()'
/*
    PARAMETERS:
    > 'Create a function that will calculate and display the totals for
       the orders in the cart
    > Output the SUBTOTAL of the cart
    > Output the estimated shipping
    > Output the SUBTOTAL, including shipping
    > Output the tax
    > Output the TOTAL (Subtotal + tax)
    > Prices displayed using the selected currency
    NOTE: You can use Canadian tax (13%), even if selected currency is not
          CAD. Shipping cost can be the sum of each item's shipping cost.
*/
function calculateCart()
{

}

// Creating 'function currencySelection()'
/*
    PARAMETERS:
    > 'There should be an element on the page for the user to select their
       preferred currency
    > 'The selected currency should be displayed/used throughout the webpage.
       Wherever a price is displayed, it is converted to the currency selected
       when it is displayed.
    > The currencies are: Canadian (default), and an additional currency of
      your choice
    HINT: This could be a function that you call whenever you display a price.
*/
function currencySelection()
{

}
