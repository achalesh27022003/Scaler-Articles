const Ages = [16,17, 5, 23,70];
/* Test to find the age > 18 */
function voter(item){
    return item > 18;
}

console.log(Ages.findIndex(voter)); /* Returns first occurence's index i.e. 3*/