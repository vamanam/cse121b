/* LESSON 4 - Programming Tasks */
/* Profile Object  */
// Object Literal
let myProfile = {
    name: "Victoria Amanam",
    photo: 'images/Victoria.png', // Replace with your actual photo path and name
    favoriteFoods: [
        'Pizza',
        'Ice Cream',
        "Bean",
        "Afaha soup",
        "Garri",
        "White soup",
        "Carrot",
        "Rice",
        "Yam",
        "Fofoo"],
    
    hobbies: [
        'AI Development',
        'Swimming',
        'Designing'],

    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: 'Akwa Ibom State, Nigeria',
    city: 'Uyo',
    length: '5 years'
});

myProfile.placesLived.push({
    place: 'Eket',
    city: 'Eket',
    length: '3 years'
});

myProfile.placesLived.push({
    place: 'Abuja, Nigeria',
    city: 'Abuja',
    length: '1 year'
});


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById('photo');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt', myProfile.name);


/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(function(food) {
  let listItem = document.createElement('li');
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});


/* Hobbies List */
let hobbiesList = document.getElementById('hobbies');
myProfile.hobbies.forEach(function(hobby) {
  let listItem = document.createElement('li');
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});


/* Places Lived DataList */

let placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(function(place) {
  let dtElement = document.createElement('dt');
  dtElement.textContent = place.place;

  let ddElement = document.createElement('dd');
  ddElement.textContent = place.length;

  placesLivedList.appendChild(dtElement);
  placesLivedList.appendChild(ddElement);
});

