// Qusetion:find the Longest Word in String

const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    words = str.split(" ");
    // words = words.sort((a,b) => b.length - a.length);
    // console.log(words);
    // return words[0];
    // return words.at(-1);

    return words.reduce((acc, currWord) => (currWord.length > acc.length ? currWord : acc), "")
};

console.log(findLongestWord("Watch Techical javascript course on youtube"));

