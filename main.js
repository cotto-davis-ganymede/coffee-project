"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var divCoffee = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameInput = document.querySelector('#name-input');

var roastSelectionTwo = document.querySelector('#roast-selection-two');
var nameInputTwo = document.querySelector('#name-input-two');

// Changes the roast if the user selects a different roasts, then updates the HTML table
function changeRoast() {
    roastSelection = document.querySelector('#roast-selection');
    updateCoffees();
}

// Changes the coffee live as the user types. Will essentially grab the value inputed as the user types and runs updateCoffes() every letter
function autofillCoffee() {
    nameInput = document.querySelector('#name-input');
    updateCoffees();
}


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2 class="c-name">' + coffee.name + '</h2>';
    html += '<p class="c-roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++){
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// e is an event
// not truly submitting form
// took e off for changeRoast & autofill functions to work
function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameInput.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || "all" === selectedRoast)  {
            if (coffee.name.toLowerCase().includes(selectedName.toLowerCase()))  {
                filteredCoffees.push(coffee);
            } else if ("" === selectedName) {
                filteredCoffees.push(coffee);
            }
        }
        // console.log(coffee.name, coffee.roast);

    });
    divCoffee.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesTwo(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoastTwo = roastSelectionTwo.value;
    var selectedNameTwo = nameInputTwo.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoastTwo || "all" === selectedRoastTwo)  {
            if (coffee.name.toLowerCase().includes(selectedNameTwo.toLowerCase()))  {
                filteredCoffees.push(coffee);
            } else if ("" === selectedNameTwo) {
                filteredCoffees.push(coffee);
            }
        }
        // console.log(coffee.name, coffee.roast);

    });
    divCoffee.innerHTML = renderCoffees(filteredCoffees);
}

//plural
divCoffee.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

