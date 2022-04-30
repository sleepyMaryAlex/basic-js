const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    let keyX = message
      .toUpperCase()
      .split("")
      .filter((symbol) => this.alphabet.includes(symbol))
      .join("");
    let keyY = key.toUpperCase();
    if (keyX.length < keyY.length) {
      keyY = keyY.substr(0, keyX.length);
    }
    if (keyX.length > keyY.length) {
      let repeatCount = Math.floor(keyX.length / keyY.length);
      keyY =
        keyY.repeat(repeatCount) +
        keyY.substr(0, keyX.length - keyY.length * repeatCount);
    }
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      let symbol = message[i].toUpperCase();
      if (this.alphabet.includes(symbol)) {
        let position =
          (this.alphabet.indexOf(keyX[index]) +
            this.alphabet.indexOf(keyY[index])) %
          26;
        result += this.alphabet[position];
        index++;
      } else {
        result += symbol;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    let keyX = encryptedMessage
      .toUpperCase()
      .split("")
      .filter((symbol) => this.alphabet.includes(symbol))
      .join("");
    let keyY = key.toUpperCase();
    if (keyX.length < keyY.length) {
      keyY = keyY.substr(0, keyX.length);
    }
    if (keyX.length > keyY.length) {
      let repeatCount = Math.floor(keyX.length / keyY.length);
      keyY =
        keyY.repeat(repeatCount) +
        keyY.substr(0, keyX.length - keyY.length * repeatCount);
    }
    let index = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let symbol = encryptedMessage[i].toUpperCase();
      if (this.alphabet.includes(symbol)) {
        let position =
          (this.alphabet.indexOf(keyX[index]) - this.alphabet.indexOf(keyY[index])) % 26;
        if (position < 0) {
          position += 26;
        }
        result += this.alphabet[position];
        index++;
      } else {
        result += symbol;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
