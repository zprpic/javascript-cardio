// Return true if anagram and false if not
// isAnagram("elbow", "below") === "true"

module.exports = isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
