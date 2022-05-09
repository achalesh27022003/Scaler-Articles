const Zoo = ["Tiger", "Monkey", "Eagle", "Rabbit", "Crocodile"]; /* Size is 5 */
console.log(Zoo); /* Prints the original array */


/* Overwrites the original array */
/* Returns the length of the new array*/
console.log(Zoo.unshift("Pigeon", "Lion")); /*, Size becomes 7 */

/* It changes the original array */
console.log(Zoo);

/*
Output:

[ 'Tiger', 'Monkey', 'Eagle', 'Rabbit', 'Crocodile' ]
7
[ 'Pigeon', 'Lion', 'Tiger', 'Monkey', 'Eagle', 'Rabbit', 'Crocodile' ]

*/