const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Sena";
const tags = "web design, web development, programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// ESCAPING \'\'
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2]; // l

// indexOf()
val = firstName.indexOf("l"); // 2
val = firstName.lastIndexOf("l"); // 3

// charAt()
val = firstName.charAt("2"); // l

// Get last char
val = firstName.charAt(firstName.length - 1); // m

// substring
val = firstName.substring(0, 4); // Will

// slice()
val = firstName.slice(0, 4); // Will
val = firstName.slice(-3); // iam

// split()
val = str.split(" ");
/* (6)[("Hello", "there", "my", "name", "is", "Sena")];
0: "Hello"
1: "there"
2: "my"
3: "name"
4: "is"
5: "Sena"
length: 6
[[Prototype]]: Array(0) */

val = tags.split(",");
/*(3)[("web design", " web development", " programming")];
0: "web design"
1: " web development"
2: " programming"
length: 3
[[Prototype]]: Array(0) */

// replace()
val = str.replace("Sena", "Jack"); // "Hello there my name is Jack";

// includes()
val = str.includes("Hello"); // true
val = str.includes("Boow!"); // false

console.log(val);
