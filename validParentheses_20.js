/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let temp = [];
  for(let ch of s) {
    if('({['.indexOf(ch) > -1) temp.push(ch);
    else if(ch == ')') {
        if(temp[temp.length-1] == '(') temp.pop();
        else return false;
    } else if (ch == '}') {
        if(temp[temp.length-1] == '{') temp.pop();
        else return false;
    } else if (ch == ']') {
        if(temp[temp.length-1] == '[') temp.pop();
        else return false;
    }
  }

  if(temp.length === 0) return true;
  return false;

};