const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = Array(options.additionRepeatTimes ?? 1)
    .fill(String(options.addition === undefined ? "" : options.addition))
    .join(options.additionSeparator ?? "|");
  let result = Array(options.repeatTimes ?? 1)
    .fill(String(str) + addition)
    .join(options.separator ?? "+");
  return result;
}

module.exports = {
  repeater
};
