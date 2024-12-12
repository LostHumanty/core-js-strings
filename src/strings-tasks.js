/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

function getStringLength(value) {
  return typeof value === 'string' ? value.length : 0;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

function sumOfCodes(str) {
  if (!str) return 0;
  return Array.from(str).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  const min = minutes.toString().padStart(2, '0');
  const sec = seconds.toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return Array.from(str).filter((char) => vowels.includes(char)).length;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(str) {
  const text = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return text === text.split('').reverse().join('');
}

function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    );
}

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function invertCase(str) {
  return Array.from(str)
    .map((char) => {
      if (char === char.toUpperCase()) return char.toLowerCase();
      if (char === char.toLowerCase()) return char.toUpperCase();
      return char;
    })
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

function unbracketTag(str) {
  return str.replace('<', '').replace('>', '');
}

function extractEmails(str) {
  return str.split(';');
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  const suits = ['♣', '♦', '♥', '♠'];
  const rank = value.slice(0, -1);
  const suit = value.slice(-1);
  return ranks.indexOf(rank) + suits.indexOf(suit) * 13;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
