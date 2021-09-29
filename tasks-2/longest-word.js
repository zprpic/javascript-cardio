// Return the longest word of a string
// If more than one longest word, put into an array
// e.g. ("Hello my name is prle") === "Hello"
// e.g. ("hello my name is zvono") === "[hello, zvono]"

module.exports = longestWord = (string) => {
  const wordsSplit = string.split(" ");
  let maxLength = 0;
  let longestWord;

  wordsSplit.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = "";
      longestWord = word;
    } else if (word.length === maxLength) {
      longestWord = longestWord.split(" ");
      longestWord.push(word);
    }
  });
  return longestWord;
};
