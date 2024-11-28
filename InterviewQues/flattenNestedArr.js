// waf to flatten a nested array

const flatten = (arr) => {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val): val), []);
}

let arr = [1,[2,[3,[4],5],10]]
console.log(flatten(arr));
