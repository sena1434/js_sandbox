let val;

// Number to string
val = 5; // 5, number, undefined
val = String(5); // 5, string, 1
val = String(4 + 4); // 8, string, 1(because of 8)

// Bool to string
val = String(true); // true, string, 4

// Date to string
val = String(new Date()); // Date, string, 45

// Array to string
val = String([1, 2, 3, 4]); // 1,2,3,4, string, 7

// toString()
val = (5).toString(); // 5, string, 1
val = true.toString(); // true, string, 4

// String to number
val = "5"; // 5, string, 1
val = Number("5"); // 5, number, 5
val = Number(true); // 1, number, 1
val = Number(false); // 0, number, 0
val = Number(null); // 0, number, 0
val = Number("Hello"); // NaN, number, NaN
val = Number([1, 2, 3]); // NaN, number, NaN

val = parseInt("100.30"); // 100, number, 100
val = parseFloat("100.30"); // 100.3, number, 100

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2; // 11, number

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2; // 56, string

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2); // 56, number

console.log(sum);
console.log(typeof sum);
