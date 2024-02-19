/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples'); // Assuming there is a div with id 'temples' in your HTML
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    // Clear the displayed list of temples
    reset();

    // Process each temple in the temple array
    temples.forEach(temple => {
        // Create HTML elements
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        // Add content and attributes to elements
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append elements to article
        article.appendChild(h3);
        article.appendChild(img);

        // Append article to templesElement
        templesElement.appendChild(article);
    });
};


const getTemples = async () => {
    try {
        // Get JSON temple data using fetch()
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const data = await response.json();

        // Assign data to templeList
        templeList = data;

        // Call displayTemples function
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};


/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clear all article elements from templesElement
};


/* filterTemples Function */
getTemples();

const filterTemples = (temples) => {
    // Call reset function to clear the output
    reset();

    // Get the value of the HTML element with the ID of 'filtered'
    const filter = document.getElementById('filtered').value;

    // Use a switch statement to filter temples based on the selected option
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};


/* Event Listener */
const filteredElement = document.getElementById('filtered');
filteredElement.addEventListener('change', () => filterTemples(templeList));

// Call getTemples function at the end of the JavaScript file to start fetching data
getTemples();
