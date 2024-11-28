// Swap two number without a temporary variable

let a=4, b=10;

a = a^b;
b = a^b;
a = a^b;

console.log(a,b);