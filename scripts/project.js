async function searchMeal() {
    const searchInput = document.getElementById('searchInput').value;

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error('Error fetching meals:', error);
        alert('Failed to fetch meals. Please try again later.');
    }
}

function displayMeals(meals) {
    const mealList = document.getElementById('mealList');
    mealList.innerHTML = '';

    if (!meals) {
        mealList.innerHTML = '<p>No meals found.</p>';
        return;
    }

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('meal');

        mealDiv.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p>${meal.strInstructions}</p>
    `;

        mealList.appendChild(mealDiv);
    });
}
