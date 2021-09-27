// Reverse a string
// Return a string in reverse
// e.g. reverseString("hello") === "olleh"

module.exports = reverseString = (string) => {
  /*   const stringToArray = string.split("");
  const reversedArray = stringToArray.reverse();
  const reversedString = reversedArray.join(""); */

  // const reversedString = string.split("").reverse().join("");
  // return reversedString;

  return string.split("").reverse().join("");
};
