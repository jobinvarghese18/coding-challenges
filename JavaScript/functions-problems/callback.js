const hellworld = (name) => {
  return `Hello ${name}`;
};

const myFunction = (fn, name) => {
  return fn(name);
};
console.log(myFunction(hellworld, "John"));
