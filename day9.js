// find the average

const calculateAverage = (arr) => {
    let total = arr.reduce((acc, curElem) => acc + curElem, 0);
    console.log(total);
    return total/arr.length;
}

console.log(calculateAverage([5,10,2,8]));