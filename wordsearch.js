const {transpose} = require('../../d2/matrix_transposition');

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (el of horizontalJoin) {
    if (horizontalJoin.includes(word)) {
      return true;
    }
  }
  let verticalJoin = transpose(letters);
  verticalJoin = verticalJoin.map((arr) => arr.join(""));
  for (el of verticalJoin) {
    if (verticalJoin.includes(word)) {
      return true;
    } 
      return false;
  } 
  
};
//!
const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'L', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'L', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'D', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'O', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'N', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'E', 'C', 'A', 'K', 'U', 'A', 'S'],
    
  ], 'WELLDONE');

// const result = wordSearch(
//   [
//     ["A", "W", "C", "F", "Q", "U", "A", "L"],
//     ["S", "E", "I", "N", "F", "E", "L", "D"],
//     ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//     ["H", "M", "J", "T", "E", "V", "R", "G"],
//     ["W", "H", "C", "S", "Y", "E", "R", "L"],
//     ["B", "F", "R", "E", "N", "E", "Y", "B"],
//     ["U", "B", "T", "W", "A", "P", "A", "I"],
//     ["O", "D", "C", "A", "K", "U", "A", "S"],
//     ["E", "Z", "K", "F", "Q", "U", "A", "L"]
//   ],
//   "SEINFELD"
// );

console.log(result);

module.exports = wordSearch;
