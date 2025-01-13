/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim().replace(/\s+/g, " ");
  s = s.split(' ').reverse().join(' ');
  return s;
};