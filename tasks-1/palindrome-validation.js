// Validate a palindrome
// Return true if palindrome else if not false
// e.g. isPalindrome("racercar") === "true", isPalindrome("hello") === "false"

module.exports = isPalindrome = (string) => {
  return (
    string ===
    string.split("").reduce((reversedString, char) => char + reversedString, "")
  );
};
