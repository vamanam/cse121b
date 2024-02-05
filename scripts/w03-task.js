/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    // Get values from HTML form controls
    var add1 = parseFloat(document.getElementById('add1').value);
    var add2 = parseFloat(document.getElementById('add2').value);

    // Call add function and assign the result to the sum element
    document.getElementById('sum').value = add(add1, add2);
}

// Event listener for the button with ID 'addNumbers'
document.getElementById('addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
// Function Expression
var subtract = function (number1, number2) {
    return number1 - number2;
};

var subtractNumbers = function () {
    var subtract1 = parseFloat(document.getElementById('subtract1').value);
    var subtract2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(subtract1, subtract2);
};

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
var multiply = (number1, number2) => number1 * number2;

var multiplyNumbers = () => {
    var factor1 = parseFloat(document.getElementById('factor1').value);
    var factor2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
};

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Your Choice - Using a combination of function declaration and arrow function
//function divide(number1, number2) {
// return number1 / number2;
//}
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient.toFixed(2);
};

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
// Selection Structures

function getTotal() {
    //input
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    //procesing
    // Check if membership checkbox is checked and apply discount
    //let membershipCheckbox = document.getElementById('membershipCheckbox').checked;
    if (document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2;//20% discount
    }
    // Check if membership checkbox is checked and apply discount
    //var total = membershipCheckbox ? subtotal * 0.8 : subtotal;

    // Output the total with two decimals using template string
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
};
document.getElementById('getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//var numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);
document.getElementById('array').textContent = numbersArray;


/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers;

/* Output Sum of Org. Array */+
numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
var multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray;


/* Output Sum of Multiplied by 2 Array */
var sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
