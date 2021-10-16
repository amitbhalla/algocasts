// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* Solution 3 */
  const arr = str.split('');
  return arr.reduce((rev, char) => {
    return char + rev;
  }, '');
}

module.exports = reverse;

// function reverse(str) {
//   /* Solution 1 */
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// --

// function reverse(str) {
//   /* Solution 2 */
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }
