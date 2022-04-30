const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {};
  let apperances = new Map();
  for (let i = 0; i < domains.length; i++) {
    let parts = domains[i].split(".").reverse();
    let ending = "";
    for (let j = 0; j < parts.length; j++) {
      ending += `.${parts[j]}`;
      if (apperances.has(ending)) {
        let current = apperances.get(ending);
        apperances.set(ending, current + 1);
      } else {
        apperances.set(ending, 1);
      }
    }
  }
  for (let key of apperances.keys()) {
    result[key] = apperances.get(key);
  }
  return result;
}

module.exports = {
  getDNSStats
};
