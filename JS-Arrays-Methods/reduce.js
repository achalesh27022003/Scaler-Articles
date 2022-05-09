/* Sum of all elements of array */

let numbers = [10, 20, 30, 40];
console.log(numbers);

/* Wrote a function to return value of sum of all elements */
function sumArray(total, item){
      return total+item;
};

console.log("Sum of all elements is: "+ numbers.reduce(sumArray));

/*
Output:

[ 10, 20, 30, 40 ]
Sum of all elements is: 100

*/