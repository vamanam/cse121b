/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Victoria Anthony Amanam";
const currentYear = new Date().getFullYear(); //"2024"
const profilePicture = "images/Victoria.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('#food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = fullName
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. Iam learning javascript language`);



/* Step 5 - Array */
let favFoods = [ "Bean", "Afaha soup", "Garri", "White soup", "Carrot", "Rice", "Yam", "fofoo"];
foodElement.innerHTML = favfoods; 
let newfood = 'cassava';
favFoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`; 







