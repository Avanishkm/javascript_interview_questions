// string is palindrom or not

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let rev_str = str.split("").reverse().join("");
    console.log(rev_str);
    return str === rev_str ? true : false;
}

console.log(isPalindrome("A man, a plan, a canel, Panama"));
console.log("racecar");
console.log("hello");