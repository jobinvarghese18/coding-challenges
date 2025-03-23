// 1. Using indexOf and lastIndexOf
const findDuplicates = (duplicates) => {
  let result = [];
  for (const i of duplicates) {
    if (duplicates.indexOf(i) !== duplicates.lastIndexOf(i)) {
      //Checking if index and last index is same for the element in the array
      result.push(i);
    }
  }
  const duplicatesFound = [...new Set(result)];
  return duplicatesFound;
};
console.log(findDuplicates([1, 3, 4, 1, 3, 9, 10])); //[ 1, 3 ]

// 2. Using set
const findDuplicatesUsingSet = (duplicates) => {
  const elements = new Set();
  const duplicateElementsFound = new Set();

  duplicates.forEach((element) => {
    if (elements.has(element)) {
      duplicateElementsFound.add(element);
    } else {
      elements.add(element);
    }
  });

  return [...duplicateElementsFound];
};
console.log(findDuplicatesUsingSet([1, 21, 16, 23, 12, 21, 13, 33, 55, 1])); //[ 21, 1 ]
