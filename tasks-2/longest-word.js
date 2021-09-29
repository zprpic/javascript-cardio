// Return the longest word of a string
// If more than one longest word, put into an array
// e.g. ("Hello my name is prle") === "Hello"
// e.g. ("hello my name is zvono") === "[hello, zvono]"

module.exports = longestWord = (string) => {
  /*   const wordsSplit = string.split(" ");
  let maxLength = 0;
  let longestWord;

  wordsSplit.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = "";
      longestWord = word;
    } else if (word.length === maxLength) {
      if (!Array.isArray(longestWord)) {
        longestWord = longestWord.split(" ");
        longestWord.push(word);
      } else {
        longestWord.push(word);
      }
    }
  });
  return longestWord; */
  const wordArray = string.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArray.sort((a, b) => {
    return b.length - a.length;
  });

  const longestWordArray = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });

  if (longestWordArray.length === 1) {
    return longestWordArray[0];
  } else {
    return longestWordArray;
  }
};
