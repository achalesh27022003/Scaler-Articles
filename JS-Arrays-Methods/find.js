const Ages = [16,17, 5, 23,70];
/* Test to find the age > 18 */
function voter(item){
    return item > 18;
}

console.log(Ages.find(voter)); /* Returns first occurence's value i.e. 23*/