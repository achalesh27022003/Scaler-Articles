/* Unique Elements of Array */

let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"];
console.log(animals);
let unique = [];  

/* Wrote a function to push unique elements in new array */
animals.forEach((item) => {
        if(!unique.includes(item)){
            unique.push(item);
        }
});

console.log(unique);

/*
Output:

[ 'Lion', 'Rabbit', 'Mouse', 'Monkey', 'Lion', 'Ape' ]
[ 'Lion', 'Rabbit', 'Mouse', 'Monkey', 'Ape' ]

*/