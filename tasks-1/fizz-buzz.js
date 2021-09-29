// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz",
// for multiples of 5, print "buzz". For numbers which are
// multiples of 3 AND 5 print "fizz buzz"

module.exports = fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    // if (i % 15 === 0) {
    //console.log(`Fizz Buzz: ${i}`)
    //}
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`Fizz Buzz: ${i}`);
    } else if (i % 3 === 0) {
      console.log(`Fizz: ${i}`);
    } else if (i % 5 === 0) {
      console.log(`Buzz: ${i}`);
    } else {
      console.log(i);
    }
  }
};
