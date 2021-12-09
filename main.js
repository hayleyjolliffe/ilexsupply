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
