// Return the character that is most common in a string
// e.g. maxCharacter("javascript") === "a"

module.exports = maxCharacter = (string) => {
  const charMap = {};

  string.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  return charMap;
};
