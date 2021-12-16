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
var cValue = 1;
var cSymbol = "$CAD";


/*

    FUNCTIONS

*/
// Creating TIMESTAMP function
function timestamp()
{
    var current = new Date();
}
