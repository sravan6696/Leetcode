/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if(s.length == 0) return true;
  let i=0;
  for(let it=0;it<t.length;it++) {
      if(s[i] == t[it]) i++;
      if(i == s.length) return true;
  }
  return false;
};