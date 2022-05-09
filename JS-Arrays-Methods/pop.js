const Zoo = ["Tiger", "Monkey", "Eagle", "Rabbit", "Crocodile"];
console.log(Zoo); /* Prints the original array */

/* Print the last removed element i.e. "Crocodile" */
console.log(Zoo.pop());

/* It changes the original array */
console.log(Zoo);

/*
Output:

[ 'Tiger', 'Monkey', 'Eagle', 'Rabbit', 'Crocodile' ]
Crocodile
[ 'Tiger', 'Monkey', 'Eagle', 'Rabbit' ]

*/