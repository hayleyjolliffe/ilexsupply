/*

    CONSTRUCTORS

*/
// Creating 'Product' constructor
function Product(id, n, p, q, m, c, s, d, i)
{
    this.id = id;                   // String
    this.name = n;                  // String
    this.price = p;                 // Number
    this.quantity = q;              // Number
    this.maximum = m;               // Number
    this.category = c;              // String
    this.shipping = s;              // Number
    this.description = d;           // String
    this.image = i;                 // String
}

// Creating 'Cart' constructor
function Cart(id, p, q, s)
{
    this.id = id;                   // String
    this.price = p;                 // Float
    this.quantity = q;              // Integer
    this.shipping = s;              // Float
}

// Creating 'Review' constructor
function Review(id, t)
{
    this.id = id;                   // String
    this.text = t;                  // String
}


/*

    GLOBALS

*/
// ARRAYS
// Creating store inventory array
var aProducts = [];

// Creating cart inventory array
var aCart = [];

// Creating timestamp function arrays
var aDays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
var aMonths = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

// VARIABLES
// Creating default currency variables
var currency = document.getElementById("currency");
var cValue = 1;
var cSymbol = "$CAD";


/*

    FUNCTIONS

*/
// Creating TIMESTAMP function
/*
    PARAMETERS:
    > Displays current date/time
    > Time format: HH:MM
    > Date format: DD/MM/YYYY
*/
function timestamp()
{
    var current = new Date();
    var day = aDays[current.getDay()];
    var date = current.getDate();
    var month = aMonths[current.getMonth()];
    var year = current.getFullYear();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var timestamp = (day +  " " + date + " " + month + " " + year + ", " + hours + ":" + minutes);
    document.getElementById("timestamp").innerHTML = timestamp;
}

// Creating INITIALIZE function
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
        UPDATE TIMESTAMP
    */
        timestamp();
    
    /*
        POPULATING STORE INVENTORY
        Format: new Product(id, n, p, q, m, c, s, d, i)
    */
    // Log before populating
    console.log(aProducts);
    
    // Item 001 — Pokemon Celebrations Pikachu Card
    aProducts.push(new Product("P025", "Pokemon Celebrations Pikachu Card", "9.99", "7", "1", "Pokemon", "0.99", "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs. '\n' This card takes inspiration from Base Set Pikachu, and is nearly identical in gameplay aside from its HP being increased from 40 to 60.", "https://tcgplayer-cdn.tcgplayer.com/product/250303_200w.jpg"));
    
    // Item 002 — Dungeons & Dragons 'Blood Oath' Custom Dice Set
    aProducts.push(new Product("D973", "Dungeons & Dragons 'Blood Oath' Custom Dice Set", "14.99", "10", "1", "Dungeons & Dragons", "1.99", "'Blood Oath' features red & white translucent dice with gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/8e8b29/3104159035/il_1588xN.3104159035_ejjz.jpg"));
    
    // Item 003 — Catan: Extension 
    aProducts.push(new Product("C405", "Catan: 5-6 Player Extension", "39.99", "10", "2", "Catan", "5.99", "Now 5-6 players can explore and settle Catan! Add 1-2 more friends or family, and expand your island with 2 more harbors, 11 terrain tiles, and green and brown settlers. '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this extension!", "https://catanshop.com/images/thumbs/0000405_catan-5-6-player-extension.jpeg"));
    
    // Item 004 — Pokemon Celebrations Dialga Card
    aProducts.push(new Product("P483", "Pokemon Celebrations Dialga Card", "9.99", "10", "1", "Pokemon", "0.99", "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity. '\n' This card's Pokedex entry comes from Pokemon Y.", "https://tcgplayer-cdn.tcgplayer.com/product/250296_200w.jpg"));
    
    // Item 005 — Catan: Cities & Knights Expansion
    aProducts.push(new Product("C391", "Catan: Cities & Knights Expansion", "59.99", "10", "2", "Catan", "5.99", "Dark clouds gather over the once peaceful landscape. Wild barbarians, lured by Catan's wealth and power, maneuver to attack. You must be strong! In Catan: Cities & Knights, you engage in the defense of Catan and compete to build the three great metropolises of Catan. '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this expansion!", "https://catanshop.com/images/thumbs/0000391_catan-cities-knights-game-expansion.jpeg"))
    
    // Item 006 — Dungeons & Dragons 'Galaxy' Custom Dice Set
    aProducts.push(new Product("D908", "Dungeons & Dragons 'Galaxy' Custom Dice Set", "14.99", "1", "Dungeons & Dragons", "1.99", "'Galaxy' custom dice set features semi-translucent dice with every colour and gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/4ce16c/2790820741/il_1588xN.2790820741_d1u2.jpg"));
    
    // Item 007 — Pokemon Celebrations Zekrom Card
    aProducts.push(new Product("P644", "Pokemon Celebrations Zekrom Card", "14.99", "8", "1", "Pokemon", "0.99", "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail. '\n' This card's Pokedex entry comes from Pokemon Y", "https://tcgplayer-cdn.tcgplayer.com/product/250308_200w.jpg"));
    
    // Item 008 — Dungeons & Dragons 'Firebolt' Custom Dice Set
    aProducts.push(new Product("D987", "Dungeons & Dragons 'Firebolt' Custom Dice Set", "14.99", "10", "1", "Dungeons & Dragons", "1.99", "'Firebolt' features orange & white translucent dice with black pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/75c0a7/3012035267/il_1588xN.3012035267_qi3l.jpg"));
    
    // Item 009 — Catan: Seafarers Expansion 
    aProducts.push(new Product("C381", "Catan: Seafarers Expansion", "59.99", "10", "2", "Catan", "5.99", "Control a group of bold, seafaring explorers and tame the wild, uncharted Isles of Catan. Embark on an epic quest to settle the home island and become the undisputed ruler of the rich Isles of Catan! '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this expansion!", "https://catanshop.com/images/thumbs/0000381_catan-seafarers-game-expansion.jpeg"));
    
    // Item 010 — Pokemon Celebrations Ho-Oh Card
    aProducts.push(new Product("P250", "Pokemon Celebrations Ho-Oh Card", "9.99", "7", "1", "Pokemon", "0.99", "It will reveal itself before a pure-hearted Trainer by shining its bright, rainbow-colored wings. '\n' This card's artwork is part of a joint illustration with Lugia, and its Pokedex entry comes from Pokemon Y.", "https://tcgplayer-cdn.tcgplayer.com/product/250300_200w.jpg"));
    
    // Item 011 — Catan: Traders & Barbarians
    aProducts.push(new Product("C385", "Catan: Traders & Barbarians Expansion", "59.99", "10", "2", "Catan", "5.99", "Delve deep into Catan with a version playable with just 2 players! Add a harbormaster, a friendly robber, special events, and new capabilities. '\n' NOTE: This is NOT a complete game; you will need a Catan base game in order to use this expansion!", "https://catanshop.com/images/thumbs/0000385_catan-traders-barbarians-game-expansion.jpeg"));
    
    // Item 012 — Dungeons & Dragons 'Unicorn Dream' Custom Dice Set
    aProducts.push(new Product("D969", "Dungeons & Dragons 'Unicorn Dream' Custom Dice Set", "14.99", "10", "1", "Dungeons & Dragons", "1.99", "'Unicorn Dream' features pink, yellow, blue, & purple dice with gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/ec389e/2945961621/il_1588xN.2945961621_pyjz.jpg"));
    
    // Item 013 — Dungeons & Dragons 'Antique Red; Custom Dice Set 
    aProducts.push(new Product("D198", "Dungeons & Dragons 'Antique Red' Custom Dice Set", "14.99", "10", "1", "Dungeons & Dragons", "1.99", "'Antique Red' features antique red acrylic inlaid with black and black pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/1b3c2b/2945983975/il_1588xN.2945983975_q59n.jpg"));
    
    // Item 014 — Pokemon Celebrations Yveltal Card
    aProducts.push(new Product("P717", "Pokemon Celebrations Yveltal Card", "9.99", "9", "1", "Pokemon", "0.99", "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more. '\n' This card's Pokedex entry comes from Pokemon Y.", "https://tcgplayer-cdn.tcgplayer.com/product/250315_200w.jpg"));
    
    // Item 015 — Dungeons & Dragons 'Bloodshot' Custom Dice Set
    aProducts.push(new Product("D159", "Dungeons & Dragons 'Bloodshot' Custom Dice Set", "14.99", "1", "Dungeons & Dragons", "1.99", "'Bloodshot' features translucent dice inlaid with red cotton & gold pips. '\n' Set includes: D4, D6, D8, D10, D12, and D20 dice, along with a drawstring pouch for storage.", "https://i.etsystatic.com/19854159/r/il/8e8b29/3104159035/il_1588xN.3104159035_ejjz.jpg"));
    
    // Log after populating
    console.log(aProducts);

    /*
        CALL DISPLAYITEMS()
        Populates the store with items from 'aProducts' array
    */
    displayProducts(aProducts);

    /*
        CALL DISPLAYCART()
        Populates the cart section with 'aCart' array
    */
    displayCart(aCart);
}

// Creating CART DISPLAY function
function displayCart()
{
    // Creating temp variables for shipping
    var subtotal = 0;
    var shipping = 0;
    var tax = 0;
    var total = 0;
    var display = document.getElementById("cartOutput");
    subtotal = parseFloat(subtotal);
    shipping = parseFloat(shipping);
    tax = parseFloat(tax);
    total = parseFloat(total);

    // Clears current output (if any)
    display.innerHTML = "";

    // Displaying cart
    if (aCart.length < 1)
    {
        // Empty cart
        display.innerHTML = "Cart is empty.";
    }
    else if (aCart.length > 1)
    {
        for (var i = 0; i <= aCart.length; i++)
        {
            // Creating temp variable for cart output
            var tempCart = aCart[i];

            // Populating cart display
            display.innerHTML += tempCart.n + " | " + tempCart.id + " | " + tempCart.p + " | " + tempCart.q + " | " + (tempCart.p * tempCart.q);

            // Calculating shipping
            shipping += tempCart.s;
        }
    }

    // Checking currency
    // CAD
    if (currency.value == "CAD")
    {
        cValue = 1;
        cSymbol = "$";
    }
    // USD
    else if (currency.value == "USD")
    {
        cValue = 0.79;
        cSymbol = "$";
    }
    // AUD
    else if (currency.value == "AUD")
    {
        cValue = 1.1;
        cSymbol = "$";
    }
    // GBP
    else if (currency.value == "GBP")
    {
        cValue - 0.69;
        cSymbol = "£";
    }
    // EUR
    else if (currency.value == "EUR")
    {
        cValue = 0.59;
        cSymbol = "€";
    }
    
    // Calculating total
    subtotal += ((subtotal + shipping) * cValue);
    tax = subtotal * 0.13;
    total = subtotal + tax;
    
    // Displaying cart + total
    display.innerHTML += "<br><hr> Subtotal: " + cSymbol + (cValue * subtotal.toFixed(2)) + "<br> Tax: " + cSymbol + (cValue * tax.toFixed(2)) + "<br> Shipping: " + cSymbol + (cValue * shipping.toFixed(2)) + "<br><hr> Total: " + cSymbol + (cValue * total.toFixed(2));
}

// Creating ADD function
function addCart()
{
    // Collect data
    var addID = document.getElementById("itemID").value;
    var addQty = document.getElementById("itemQty").value;
    addQty = parseInt(addQty);

    // Validating product ID
    var newProduct = null;
    for (var i = 0; i <= aProducts.length; i++)
    {
        if (addID == aProducts[i].id)
        {
            newProduct = i;
        }
    }
    if (newProduct == null)
    {
        alert("Please enter a valid product ID!");
        document.getElementById("productID").innerHTML = "";
        return;
    }

    // Validating quantity
    for (var i = 0; i <= aProducts; i++)
    {
        if (aProducts[i].maximum <= addQty - 1)
        {
            alert("Requested quantity exceeds the maximum available! Please try again.");
            document.getElementById("productQty").innerHTML = 0;
            return;
        }
    }
    for (var i = 0; i <= aProducts.length; i++)
    {
        if (addQty <= 0)
        {
            alert("Invalid quantity. Please try again!");
            document.getElementById("productQty").innerHTML = 0;
            return;
        }
    }

    // Add to cart
    var exists = false;

    for (var i = 0; i <= aProducts.length; i++)
    {
        if (aProducts[newProduct].id == aCart[i].id)
        {
            exists = true;
            aCart[i].quantity += addQty;
            aStore[newProduct].quantity -= addQty;
        }
    }

    if (!exists)
    {
        aCart.push(new Cart(aProducts[newProduct].id, aProducts[newProduct].price, addQty, aProducts[newProduct].shipping));
        aProducts[newProduct].quantity -= addQty;
        alert("Added to cart!");
    }
    displayCart();
    filter();
}
