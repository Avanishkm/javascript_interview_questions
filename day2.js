// Question :  Hash tag generator

const generateHash = (str) => {
    if(str.length > 280 || str.trim() === 0){
        return false;
    }

    str = str.split(" ");
    // console.log(str);
    // str = str.map((current) => current.replace(current[0], current[0].toUpperCase())) // 1st method
    str = str.map((currElem) => currElem.charAt(0).toUpperCase() + currElem.slice(1))
    str = `#${str.join("")}`;
    // console.log(str);
    return str;

}


console.log(generateHash("my name is avanish kumar"));