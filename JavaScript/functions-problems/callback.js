const greeting = (name) => {
  return `Hell ${name}, welcome.`;
};

const myFunc = (fn, name) => {
  return fn(name);
};

console.log(myFunc(greeting, "Sam"));
