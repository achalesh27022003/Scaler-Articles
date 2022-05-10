let animals = ["Lion", "Rabbit", "Mouse"];
console.log(animals.includes("Mouse", 2)); /* Returns True */
console.log(animals.includes("Rabbit", 0)); /* Returns True */
console.log(animals.includes("RABBIT", 0)); /* Returns False, as includes() method is case sensitive */