const findSum = (a) => {
  return function (b) {
    if (b) {
      return findSum(a + b);
    }
    return a;
  };
};

console.log(findSum(2)(4)()); //6
console.log(findSum(2)(10)(20)()); //32
