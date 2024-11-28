function findMissingNumber(arr){
    const n = arr.length+1;
    const sum = (n*(n+1))/2;
    const sumOfNum = arr.reduce((acc, curVal) => acc+curVal ,0)
    return sum - sumOfNum;
}

let arr = [1,2,3,5,6];
console.log(findMissingNumber(arr));

// tc = O(n);
// sc = O(1);
