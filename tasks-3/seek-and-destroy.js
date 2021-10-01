// Remove from the array whatever is in the following arguments. Return the leftover values.
// e.g. seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2,6) === "[3, 4, "hello"]"

module.exports = seekAndDestroy = (arr, ...rest) => {
  return arr.filter((val) => !rest.includes(val));
};
