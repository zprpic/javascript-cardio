// Reverse a string
// Return a string in reverse
// e.g. reverseString("hello") === "olleh"

module.exports = reverseString = (string) => {
  /*   const stringToArray = string.split("");
  const reversedArray = stringToArray.reverse();
  const reversedString = reversedArray.join("");
  return reversedString;
   */
  /*   const reversedString = string.split("").reverse().join("");
  return reversedString;
  return string.split("").reverse().join(""); */
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};
