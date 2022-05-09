/* Multiply each elements of array */

let numbers = [10, 20, 30, 40];
console.log(numbers);

let twice = [];  

/* Wrote a function to double elements in new array */
numbers.map((item) => {
     twice.push(item*2);
});

console.log(twice);

/*
Output:

[ 10, 20, 30, 40 ]
[ 20, 40, 60, 80 ]

*/