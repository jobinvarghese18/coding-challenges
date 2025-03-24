const findLargestIndicesDifferenceOfChar = (string, char) => {
  let minIndex = null;
  let maxIndex = null;

  for (let i = 0; i <= string.length; i++) {
    if (string[i] === char) {
      if (minIndex === null) {
        minIndex = i;
      }
      maxIndex = i;
    }
  }

  console.log(minIndex, maxIndex);
  if (minIndex !== null && maxIndex !== null && minIndex !== maxIndex) {
    return maxIndex - minIndex;
  }
  return -1;
};
