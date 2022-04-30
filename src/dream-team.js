const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} arr names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  const names = [];
  for (let elem of arr) {
    if (typeof elem === "string") {
      let firstLetter = elem.trim()[0].toUpperCase();
      names.push(firstLetter);
    }
  }
  return names.sort().join("");
}

module.exports = {
  createDreamTeam,
};
