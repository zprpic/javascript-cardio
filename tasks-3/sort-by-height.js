// Sort by height. Do not remove the -1s tho!
// sortByHeight([-1, 150, 130, -1, -1, 120, 160]) === "([-1, 160, 150, -1, -1, 130, 120])"

module.exports = sortByHeight = (arr) => {
  const arr1 = [];
  const arr2 = [];

  arr.forEach((value, index) =>
    value === -1 ? arr1.push(index) : arr2.push(value)
  );

  const sortedArray = arr2.sort((a, b) => b - a);

  arr1.forEach((value, index) => sortedArray.splice(arr1[index], 0, -1));

  return sortedArray;
};
