// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let freq = 0;
  let ans = '';
  for (let char in str) {
    obj[str[char]] ? obj[str[char]]++ : (obj[str[char]] = 1);
  }
  for (let prop in obj) {
    if (freq < obj[prop]) {
      freq = obj[prop];
      ans = prop;
    }
  }
  return ans;
}

module.exports = maxChar;
