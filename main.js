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

// Creating 'aDays' to store the days for the timestamp function
var aDays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

// Creating 'aMonths' to store the months for the timestamp function
var aMonths = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

/*

    FUNCTIONS

*/

// Creating 'function displayTime()'
/*
    PARAMETERS:
    > Displays current date/time
    > Time format: HH:MM
    > Date format: DD/MM/YYYY
*/
function displayTime()
{
    var current = new Date();
    var day = aDays[current.getDay()];
    var date = current.getDate();
    var month = aMonths[current.getMonth()];
    var year = current.getFullYear();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var datestamp = (day +  " " + date + " " + month + " " + year + ", " + hours + ":" + minutes);
    document.getElementById("datetime").innerHTML = datestamp;
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
    // Create temp variable for creating store items
    var divNumber = aStore.length;

    // Creating new elements for store items
    for (var x = 0; x <= divNumber; x++)
    {
        document.createElement("div");
    }
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
    // EMPTY CART
    if (aCart.length == 0)
    {
        document.getElementById("displayCart").innerHTML = "Your cart is empty.";
    }
    else
    {
        document.getElementById("displayCart").innerHTML = aCart;
    }
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
    // Fun free shipping perk
    if (subtotal >= 50)
    {
        shipping = 0;
    }
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
    // Creating dropdown
    var dropdown = document.getElementById("currency");

    // Empty dropdown
    dropdown.innerHTML = "";

    // Setting default option to $CAD
    var currencyCAD = document.createElement("option");
    currencyCAD.innerHTML = "$CAD";
    currencyCAD.value = 1;
    currencyCAD.selected = true;
    dropdown.appendChild(currencyCAD);

    // Creating currency options
    // $USD
    var currencyUSD = document.createElement("option");
    currencyUSD.innerHTML = "$USD";
    currencyUSD.value = 0.79;
    currencyUSD.selected = false;
    dropdown.appendChild(currencyUSD);
    // $AUD
    var currencyAUD = document.createElement("option");
    currencyAUD.innerHTML = "$AUD";
    currencyAUD.value = 1.1;
    currencyAUD.selected = false;
    dropdown.appendChild(currencyAUD);
    // €EUR
    var currencyEUR = document.createElement("option");
    currencyEUR.innerHTML = "€EUR";
    currencyEUR.value = 0.69;
    currencyEUR.selected = false;
    dropdown.appendChild(currencyEUR);
    // £GBP
    var currencyGBP = document.createElement("option");
    currencyGBP.innerHTML = "£GBP";
    currencyGBP.value = 0.59;
    currencyGBP.selected = false;
    dropdown.appendChild(currencyGBP);
}

// Creating 'function filterItems()'
/*
    PARAMETERS:
    > Attached to '<select id="category">'
    > On change: filters items by selected category
*/
function filterItems()
{
    // Collect selected filter
    var filtered = document.getElementById("category").value;

    // Creating array for filtered items
    var aFiltered = [];

    // Creating index for filtering items
    var i = 0;

    // Display ALL products
    if (filtered == "All")
    {
        displayStoreItems(aStore);
        return;
    }
    
    // Display FILTERED products
    while (i < aStore.length)
    {
        if (aStore[i].category == filtered)
        {
            aFiltered.push(aStore[i]);
        }
        i++;
    }
    displayItems(aFiltered);
}

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
        CALLING DISPLAYTIME()
    */
        displayTime();
    
    /*
        POPULATING STORE INVENTORY
        Format: new Store(id, n, p, q, m, c, s, r, d, i)
    */
    // Log before populating
    console.log(aStore);
    
    // Item 001 — Pokemon Celebrations Pikachu Card
    aStore.push(new Store("P025", "Pokemon Celebrations Pikachu Card", "9.99", "7", "1", "Pokemon", "0.99", "", "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs. '\n' This card takes inspiration from Base Set Pikachu, and is nearly identical in gameplay aside from its HP being increased from 40 to 60.", "https://tcgplayer-cdn.tcgplayer.com/product/250303_200w.jpg"));
    
    // Item 002 — Dungeons & Dragons 'Blood Oath' Custom Dice Set
    aStore.push(new Store("D973", "Dungeons & Dragons 'Blood Oath' Custom Dice Set", "14.99", "10", "1", "", "Dungeons & Dragons", "1.99", "'Blood Oath' features red & white translucent dice with gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/8e8b29/3104159035/il_1588xN.3104159035_ejjz.jpg"));
    
    // Item 003 — Catan: Extension 
    aStore.push(new Store("C405", "Catan: 5-6 Player Extension", "39.99", "10", "2", "Catan", "5.99", "", "Now 5-6 players can explore and settle Catan! Add 1-2 more friends or family, and expand your island with 2 more harbors, 11 terrain tiles, and green and brown settlers. '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this extension!", "https://catanshop.com/images/thumbs/0000405_catan-5-6-player-extension.jpeg"));
    
    // Item 004 — Pokemon Celebrations Dialga Card
    aStore.push(new Store("P483", "Pokemon Celebrations Dialga Card", "9.99", "10", "1", "Pokemon", "0.99", "", "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity. '\n' This card's Pokedex entry comes from Pokemon Y.", "https://tcgplayer-cdn.tcgplayer.com/product/250296_200w.jpg"));
    
    // Item 005 — Catan: Cities & Knights Expansion
    aStore.push(new Store("C391", "Catan: Cities & Knights Expansion", "59.99", "10", "2", "Catan", "5.99", "", "Dark clouds gather over the once peaceful landscape. Wild barbarians, lured by Catan's wealth and power, maneuver to attack. You must be strong! In Catan: Cities & Knights, you engage in the defense of Catan and compete to build the three great metropolises of Catan. '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this expansion!", "https://catanshop.com/images/thumbs/0000391_catan-cities-knights-game-expansion.jpeg"))
    
    // Item 006 — Dungeons & Dragons 'Galaxy' Custom Dice Set
    aStore.push(new Store("D908", "Dungeons & Dragons 'Galaxy' Custom Dice Set", "14.99", "1", "Dungeons & Dragons", "1.99", "", "'Galaxy' custom dice set features semi-translucent dice with every colour and gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/4ce16c/2790820741/il_1588xN.2790820741_d1u2.jpg"));
    
    // Item 007 — Pokemon Celebrations Zekrom Card
    aStore.push(new Store("P644", "Pokemon Celebrations Zekrom Card", "14.99", "8", "1", "Pokemon", "0.99", "", "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail. '\n' This card's Pokedex entry comes from Pokemon Y", "https://tcgplayer-cdn.tcgplayer.com/product/250308_200w.jpg"));
    
    // Item 008 — Dungeons & Dragons 'Firebolt' Custom Dice Set
    aStore.push(new Store("D987", "Dungeons & Dragons 'Firebolt' Custom Dice Set", "14.99", "10", "1", "Dungeons & Dragons", "1.99", "", "'Firebolt' features orange & white translucent dice with black pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/75c0a7/3012035267/il_1588xN.3012035267_qi3l.jpg"));
    
    // Item 009 — Catan: Seafarers Expansion 
    aStore.push(new Store("C381", "Catan: Seafarers Expansion", "59.99", "10", "2", "Catan", "5.99", "", "Control a group of bold, seafaring explorers and tame the wild, uncharted Isles of Catan. Embark on an epic quest to settle the home island and become the undisputed ruler of the rich Isles of Catan! '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this expansion!", "https://catanshop.com/images/thumbs/0000381_catan-seafarers-game-expansion.jpeg"));
    
    // Item 010 — Pokemon Celebrations Ho-Oh Card
    aStore.push(new Store("P250", "Pokemon Celebrations Ho-Oh Card", "9.99", "7", "1", "Pokemon", "0.99", "", "It will reveal itself before a pure-hearted Trainer by shining its bright, rainbow-colored wings. '\n' This card's artwork is part of a joint illustration with Lugia, and its Pokedex entry comes from Pokemon Y.", "https://tcgplayer-cdn.tcgplayer.com/product/250300_200w.jpg"));
    
    // Item 011 — Catan: Traders & Barbarians
    aStore.push(new Store("C385", "Catan: Traders & Barbarians Expansion", "59.99", "10", "2", "Catan", "5.99", "", "Delve deep into Catan with a version playable with just 2 players! Add a harbormaster, a friendly robber, special events, and new capabilities. '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this expansion!", "https://catanshop.com/images/thumbs/0000385_catan-traders-barbarians-game-expansion.jpeg"));
    
    // Item 012 — Dungeons & Dragons 'Unicorn Dream' Custom Dice Set
    aStore.push(new Store("D969", "Dungeons & Dragons 'Unicorn Dream' Custom Dice Set", "14.99", "10", "1", "Dungeons & Dragons", "1.99", "", "'Unicorn Dream' features pink, yellow, blue, & purple dice with gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/ec389e/2945961621/il_1588xN.2945961621_pyjz.jpg"));
    
    // Item 013 — Dungeons & Dragons 'Antique Red; Custom Dice Set 
    aStore.push(new Store("D198", "Dungeons & Dragons 'Antique Red' Custom Dice Set", "14.99", "10", "1", "Dungeons & Dragons", "1.99", "", "'Antique Red' features antique red acrylic inlaid with black and black pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/1b3c2b/2945983975/il_1588xN.2945983975_q59n.jpg"));
    
    // Item 014 — Pokemon Celebrations Yveltal Card
    aStore.push(new Store("P717", "Pokemon Celebrations Yveltal Card", "9.99", "9", "1", "Pokemon", "0.99", "", "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more. '\n' This card's Pokedex entry comes from Pokemon Y.", "https://tcgplayer-cdn.tcgplayer.com/product/250315_200w.jpg"));
    
    // Item 015 — Dungeons & Dragons 'Bloodshot' Custom Dice Set
    aStore.push(new Store("D159", "Dungeons & Dragons 'Bloodshot' Custom Dice Set", "14.99", "1", "Dungeons & Dragons", "1.99", "", "'Bloodshot' features translucent dice inlaid with red cotton & gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/8e8b29/3104159035/il_1588xN.3104159035_ejjz.jpg"));
    
    // Log after populating
    console.log(aStore);

    /*
        CALL DISPLAYITEMS()
        Populates the store with items from 'aStore' array
    */
    displayItems(aStore);

    /*
        CALL DISPLAYCART()
        Populates the cart section with 'aCart' array
    */
    displayCart();
}
