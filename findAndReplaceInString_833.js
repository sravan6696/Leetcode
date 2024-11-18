/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
  let replaces = {};
  for(let i=0;i<indices.length;i++) {
    let n = sources[i].length, j=indices[i];
    if(s.substring(j, j+n) == sources[i]) {
      replaces[j] = targets[i] + ' ' + n;
    }
  }
  // console.log(replaces);
  let replaceKeys = Object.keys(replaces).sort((a,b) => b-a);
  // console.log(replaceKeys);
  for(let i=0;i<replaceKeys.length;i++) {
    let j = parseInt(replaceKeys[i]);
    let n = parseInt(replaces[j].split(' ')[1]), temp = replaces[j].split(' ')[0];
    // console.log(j, n, temp);
    s = s.substring(0,j) + temp + s.substring(j+n);
  }

  return s;
};

// console.log(findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]));
console.log(findReplaceString("vmokgggqzp", [3,5,1], ["kg","ggq","mo"], ["s","so","bfr"]));