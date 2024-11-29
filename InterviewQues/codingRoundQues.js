// Q 1 =>  find the intersection of three arrays.

// function intersectionThree(arr1, arr2, arr3) {
//     const filterdArr = arr1.filter(value => arr2.includes(value) && arr3.includes(value));
//     return filterdArr;
// }

// let arr1 = [1, 2, 3]
// let arr2 = [2,3,4]
// let arr3 = [3,4,5]

// console.log(intersectionThree(arr1, arr2, arr3));


// Q 2 =>  remove all falsy values from an array

// function removeFalsy(arr){
//     return arr.filter(Number);
// }
// let arr = [0,1,false, 2];
// console.log(removeFalsy(arr));


//  Q 3 =>  count the occurance of each character

// function countChar(str){
//     return str.split('').reduce((acc, char) =>{
//         acc[char] = (acc[char]||0)+1;
//         return acc
//     },{})
// }

// console.log(countChar('hello'))


// Q 4 =>  check if a string contains only numbers.

// function isNumber(str){
//     return /^d+$/.test(str);
// }
// console.log(isNumber('12345'))
