// write a function to sort an array of numbers in ascending order

const sortAscending = (arr) => {
    return arr.sort((a,b) => a-b);
}

console.log(sortAscending([5,3,10,8]));