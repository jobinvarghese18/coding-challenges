function greeting(name) {
  return `Hello ${name}, my name is ${this.name}.`;
}

const person = { name: "John" };

// call
console.log(greeting.call(person, "Sam"));

//apply
console.log(greeting.apply(person, ["Brandon"]));

//bind
const newGreeting = greeting.bind(person, ["Samuel"]);
console.log(newGreeting());
