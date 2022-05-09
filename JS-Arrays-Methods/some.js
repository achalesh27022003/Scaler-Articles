/* Checks if Any of the People who are eligible to vote (Age >= 18) */

let age = [45, 20, 30, 18, 15, 7, 60];
let noage = [4, 13, 12, 17, 15, 7, 6];


/* Wrote a function to check the test */
function voters (item){
     return item >= 18;
};

console.log(age.some(voters)); /* Returns true because some of the any elements passes the test */
console.log(noage.some(voters)); /*Returns false because none of the any element passes the test */
