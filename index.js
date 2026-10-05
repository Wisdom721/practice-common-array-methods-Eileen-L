let drinks = ["Latte", "Tea", "Espresso"];

let pastries = ["Croissant", "Muffin", "Bagel"];
console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastries.length);
console.log("Drink:", drinks[0], "Pastry:", pastries[2]);
console.log("Drink:", drinks[1], "Pastry:", pastries[0]);
console.log("Drink:", drinks[2], "Pastry:", pastries[1]);
let drinkIndex = 1;
let pastryIndex = 2;

console.log("Selected drink:", drinks[drinkIndex]);
console.log("Selected pastry:", pastries[pastryIndex]);
for (let i = 0; i < drinks.length; i++) {
  console.log("Drink:", drinks[i]);
}drinks.push("Flat White");

console.log("Updated number of drinks:", drinks.length);