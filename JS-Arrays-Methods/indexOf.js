let animals = ["Lion", "Rabbit", "Mouse", "Monkey","Ape", "Bird", "Swam"];
console.log(animals.indexOf("Parrot")); /* Returns -1, as Parrot is not in the array */
console.log(animals.indexOf("Monkey")); /* Returns 3 as default it starts searching from index 0 */
console.log(animals.indexOf("Rabbit", 2)); /* Returns -1, as it starts searching from index 2, after which there is no Rabbit */