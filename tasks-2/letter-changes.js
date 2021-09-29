// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// e.g. "hello there" === "Ifmmp UIfsf"

module.exports = letterChanges = (string) => {
  let newString = string.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newString = newString.replace(/a|e|i|o|u/gi, (vowel) => {
    return vowel.toUpperCase();
  });
  return newString;
};
