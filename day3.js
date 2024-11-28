// write a function called countChar that takes two parameters: a string and a character
//  to count. the function should return the number of times the specified character appears in the string in the string.


const countChar = (word, char) =>{
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split("").reduce((acc, currVal)=> {
        if(currVal === char){
            acc++;
        }
        return acc;
    },0)
    return totalCount;

}

console.log(countChar("MissIssippi", "I"));