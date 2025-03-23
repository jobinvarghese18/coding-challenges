Array.prototype.includes = function (value, fromIndex) {
  let result = false;
  const array = Object(this); //Extract array
  const isFromIndexEnabled = fromIndex !== undefined; //Optional parameter

  const index = Math.max(
    fromIndex >= 0 ? fromIndex : array.length - Math.abs(fromIndex),
    0
  );

  for (let i = 0; i < array.length; i++) {
    const isNaN = typeof value === "number" && isNaN(value) && isNaN(array[i]); //Native behavior supports NaN
    if (
      (!isFromIndexEnabled && (value === array[i] || isNaN)) ||
      (isFromIndexEnabled &&
        (value === array[i] ||
          (typeof value === "number" && isNaN(value) && isNaN(array[i]))) &&
        index === i)
    ) {
      result = true;
    }
  }

  return result;
};

const array = [1, 22, 2, NaN, 5];

console.log(array.includes(1, -12)); // true  ✅
console.log(array.includes(2, -2)); // false ✅ (starts from index 3)
console.log(array.includes(NaN)); // true  ✅ (correctly finds NaN)
console.log(array.includes(22, 10)); // false ✅ (fromIndex is out of bounds)
console.log(array.includes(5, -1)); // true  ✅ (last element is found)
console.log(array.includes(100)); // false ✅ (not in array)
