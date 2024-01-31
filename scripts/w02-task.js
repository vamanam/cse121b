/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Victoria Anthony Amanam";
const currentYear = new Date().getFullYear(); //"2024"
const profilePicture = "images/Victoria.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = fullName
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. Iam learning javascript language`);

/* Step 5 - Array */
//let favFoods = ["Bean", "Afaha soup", "Garri", "White soup", "Carrot", "Rice", "Yam", "Fofoo"];
//foodElement.innerHTML = 'favFoods'

//let newfood = "cassava";
//favFoods.push("newfood");
//console.log(favFoods)
//foodElement.innerHTML += `<br>${favFoods}`;

//let lastfood = 'Foffo'
//favFoods.pop(); //remove the last element
//console.log(favFoods)

//let firstfood = 'Bean'
//favoriteFoods.shift(firstfood); //remove the first element
//foodElement.innerHTML += `<br>${favFoods}`;


var favoriteFoods = ['Pizza', 'Ice Cream', 'Sushi', "Bean", "Afaha soup", "Garri", "White soup", "Carrot", "Rice", "Yam", "Fofoo"]

// Display favorite foods in the HTML element with id 'food'
foodElement.textContent = favoriteFoods;

// Declare and instantiate a variable for a new favorite food item

var favoriteFoods = ['Pizza', 'Burger', 'Ice Cream', 'Sushi', "Bean", "Afaha soup", "Garri", "White soup", "Carrot", "Rice", "Yam", "Fofoo"]
var newFavoriteFood = 'Burger';
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Add the new favorite food to the array
var favoriteFoods = ['Pizza', 'Burger', 'Ice Cream', 'Sushi', "Bean", "Afaha soup", "Garri", "White soup", "Carrot", "Rice", "Yam", "Fofoo"]
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.push(newFavoriteFood);

// Append the new array values to the displayed content with line breaks
//foodElement.textContent += `\n${favoriteFoods.join('<br>')}`;
//foodElement.innerHTML += `<br>${favFoods}`;
// Remove the first element in the favorite food array
var favoriteFoods = ['Pizza', 'Ice Cream', 'Sushi', "Bean", "Afaha soup", "Garri", "White soup", "Carrot", "Rice", "Yam", "Fofoo"]
favoriteFoods.shift();

// Append the modified array output with a line break
foodElement.textContent += `\n${favoriteFoods.join('<br>')}`;
//foodElement.innerHTML += `<br>${favFoods}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

