// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //   const negative = n < 0;
  //   const num = Math.abs(n);
  //   const revNum = num.toString().split('').reverse().join('');
  //   if (negative) {
  //     return 0 - +revNum;
  //   } else {
  //     return +revNum;
  //   }
  return n < 0
    ? 0 - +Math.abs(n).toString().split('').reverse().join('')
    : +Math.abs(n).toString().split('').reverse().join('');
}

module.exports = reverseInt;
