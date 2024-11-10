/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function(s) {
  let count = 0, res = '';
  for(let i=0;i<s.length;i++){
    if(s[i] == '(') count++;
    else if(s[i] == ')') count--;
    if(count >= 0) res += s[i]; 
    else count = 0;
  }
  let i=res.length-1;
  while(count > 0) {
    if(res[i] == '(') {
      count--;
      res = res.substring(0,i) + res.substring(i+1);
    }
    i--;
  }
  return res;
};