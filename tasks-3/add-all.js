// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// e.g. addAll(2,5,6,7) === "20"

/* module.exports = addAll = (...args) => {
  let result = 0;
  args.forEach((number) => (result += number));
  return result;
}; */

module.exports = function addAll() {
  let result = 0;
  for (let number in arguments) {
    result += arguments[number];
  }
  return result;
};
