var person = {
    name: "Rupali",
    age: 24
}
const {
    age,
    name: firstName = "XYZ"
} = person;
// console.log(`my name is ${firstName} and I am ${age} years old`);

var a = ["name", undefined, "xyz"];
const [, address = 'new york'] = a;
console.log(`hi ${address}`);