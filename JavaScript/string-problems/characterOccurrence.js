//With for of
const countCharacterOccurrance = (string) => {
  const result = {};
  for (const char of string.replaceAll(" ", "")) {
    const prevValue = result[char] || 0;
    result[char] = prevValue + 1;
  }
  return result;
};

console.log(countCharacterOccurrance("Hello world!"));

const countCharacterOccurranceWithReduce = (string) => {
  const array = string.split("");
  const result = array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return result;
};

console.log(countCharacterOccurranceWithReduce("Hellooo"));
