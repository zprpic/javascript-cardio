// Take an array of arrays and flatten to a single array
// e.g. [[1, 2], [3, 4], [5, 6], [7]] === "[1, 2, 3, 4, 5, 6, 7]"

module.exports = flattenArray = (arrays) => {
  /*   arrays.forEach((miniArray) => {
    miniArray.forEach((item) => {
      flattenedArray.push(item);
    });
      return flattenedArray;
  }); */

  return arrays.reduce((a, b) => {
    return a.concat(b);
  });
};
