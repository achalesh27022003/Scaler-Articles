const Zoo = ["Tiger", "Monkey", "Eagle", "Rabbit", "Crocodile"]; /* Size is 5 */
console.log(Zoo); /* Prints the original array */


/* Remove the first element, and shifts the remaining one in place*/
/* Returns the shifted element */
console.log(Zoo.shift()); 

/* It changes the original array */
console.log(Zoo);

/*
Output:

[ 'Tiger', 'Monkey', 'Eagle', 'Rabbit', 'Crocodile' ]
Tiger
[ 'Monkey', 'Eagle', 'Rabbit', 'Crocodile' ]

*/