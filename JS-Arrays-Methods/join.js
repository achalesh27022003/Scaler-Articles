const Zoo = ["Tiger", "Monkey", "Eagle", "Rabbit", "Crocodile"];

console.log(Zoo.join()); /* Default separator value is comma */
console.log(Zoo.join('+')); /* Separator value here is plus */

/*
Output:

Tiger,Monkey,Eagle,Rabbit,Crocodile
Tiger+Monkey+Eagle+Rabbit+Crocodile

*/