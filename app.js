const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 1987;
  },
};

let = val;

val = person;
// Get specific value
val = person.firstName; // Steve
val = person["lastName"]; // Steve
val = person.age; // 30
val = person.hobbies[1]; // sports
val = person.address.state; // FL
val = person.address["city"]; // Miami
val = person.getBirthYear(); // 1987

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
