/* Array */
const Zoo = ["Tiger", "Monkey", "Eagle", "Rabbit", "Crocodile"];
console.log(Zoo.length); /* Size is 5 */

/* Removes 2 elements from index 1, adds three elements: Fish, Frog, Shark*/

console.log(Zoo.splice(1,2, "Fish", "Frog", "Shark")); /* Returns the array of removed elements */
console.log(Zoo); /* Returns the new array after splice operation */
console.log(Zoo.length); /* Size is 6 as 5 - 2 + 3 = 6 */

/*
Output:

5
[ 'Monkey', 'Eagle' ]
[ 'Tiger', 'Fish', 'Frog', 'Shark', 'Rabbit', 'Crocodile' ]
6

*/