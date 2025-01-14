/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  for(let s of strs) {
    let temp = s.split('').sort().join('');
    if(temp in map) {
      map[temp].push(s);
    } else {
      map[temp] = [s];
    }
  }
  return Object.values(map);
};