/* People who are eligible to vote (Age >= 18) */

let age = [45, 20, 30, 18, 15, 7, 60];
console.log(age);

let voters = [];  

/* Wrote a function to check the test i.e Age>=18 in new array */
age.filter((item) => {
     if(item >= 18)
     {
         voters.push("Eligible")
     }
     else{
         voters.push("Not Eligible")
     } 
});

console.log(voters);

/*
Output:

[45, 20, 30, 18, 15,  7, 60 ]
['Eligible','Eligible','Eligible','Eligible','Not Eligible','Not Eligible','Eligible']

*/