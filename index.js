// Declaring a variable in global scope
var customerName = 'bob'

const leastFavoriteCustomer = 'John Doe'

// A function that converts the customer name to uppercase
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

// A function that sets the bestCustomer global variable
function setBestCustomer(){
    bestCustomer = 'not bob'
}

// A function that overrides the bestCustomer variable
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

// A function that changes the least favorite customer
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Jane Doe'
}


