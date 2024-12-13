const countries = [ 'USA', 'Canada', 'UK' ];
// Original array modify methods. (mutability)
const newCountries = countries.push('Germany', 'Austrilia');    // Return new array length.

console.log(countries);
console.log(newCountries);

//pop()
const removedCountry = countries.pop(); // Remove LAST element and return removed element.

console.log(countries);
console.log(removedCountry);

// Inverse
const addFirstCountry = countries.unshift('Mexico', 'Russia');  // Return new array length.

console.log(countries);
console.log(addFirstCountry);

//shift()
const removeFirstCountry = countries.shift(); // Remove FIRST element and return removed element.

console.log(countries);
console.log(removeFirstCountry);