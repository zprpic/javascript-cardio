// Return an integer in reverse
// e.g. reverseInteger(123) === 321

module.exports = reverseInteger = (number) => {
  //return Number(Array.from(String(number), Number).reverse().join(""));
  return (
    parseInt(number.toString().split("").reverse().join("")) * Math.sign(number)
  );
};
