/* In case of numeric, we have to write compare function in sort() method to make its working proper. */

let numbers = [ 20, 5.2, -120, 100, 30, 0 ];
console.log(numbers.sort()); /* Output: [ -120, 0, 100, 20, 30, 5.2 ] which is wrong */

/* Write a compare function for numeric ones */
/* Logic: 
   20 - (5.2) = +ve => 5.2 would be placed before 20,
   20 - (-120) = +ve => -120 would be placed before 20,
   20 - (100) = -ve => 100 would be placed after 20,
   20 - (30) = -ve => 30 would be placed after 20,
   20 - (0) = +ve => 0 would be placed before 20,
   Similarly for every element, we check and place them accordingly in iterations.

*/
function compare(a,b) {
    return (a-b);
}

console.log(numbers.sort(compare)); /* Output: [ -120, 0, 5.2, 20, 30, 100 ] which is correct */