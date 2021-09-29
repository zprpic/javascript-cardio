// Split an array into chunked arrays of a specific length
// e.g. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]

module.exports = chunkArray = (array, length) => {
  let chunkedArray = [];
  let i = 0;

  while (i < array.length) {
    chunkedArray.push(array.slice(i, i + length));
    i += length;
  }

  return chunkedArray;
};
