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

//building coffee table object html
// took ID displays
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
// looping plural coffees array -- starting from end counting back?
function renderCoffees(coffees) {
    var html = '';
    // for(var i = coffees.length - 1; i >= 0; i--)
        for(var i = 0; i <= coffees.length - 1; i++){
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// without this form it no work -- updating table with form inputs
// e is an event
// possible live function
// not truly submitting form
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || "all" === selectedRoast)  {
            if (coffee.name === selectedName)  {
                filteredCoffees.push(coffee);
            } else if ("" === selectedName) {
                filteredCoffees.push(coffee);
            }
        }
        // console.log(coffee.name, coffee.roast);

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection');

//plural
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
