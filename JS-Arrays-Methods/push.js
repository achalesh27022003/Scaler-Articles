const Zoo = ["Tiger", "Monkey", "Eagle", "Rabbit", "Crocodile"]; /* Size is 5 */
console.log(Zoo); /* Prints the original array */

/* Add new element "Ostrich" at the end of the array. */
/* Returns size of the new array as output */

console.log(Zoo.push("Ostrich")); /* Size becomes 6 */

/* It changes the original array */
console.log(Zoo);

/*
Output:

[ 'Tiger', 'Monkey', 'Eagle', 'Rabbit', 'Crocodile' ]
6
[ 'Tiger', 'Monkey', 'Eagle', 'Rabbit', 'Crocodile', 'Ostrich' ]

*/