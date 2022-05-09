/* Checks if All of the People who are eligible to vote (Age >= 18) */

let age = [45, 20, 30, 18, 22, 71, 60];
let noage = [40, 13, 21, 18, 19, 71, 60];


/* Wrote a function to check the test */
function voters (item){
     return item >= 18;
};

console.log(age.every(voters)); /* Returns true because all of the array elements passes the test */
console.log(noage.every(voters)); /*Returns false because some of the array element doesn't pass the test */
