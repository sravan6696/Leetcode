/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [];
  for(let i=0;i<s.length;i++) {
    if(s.charAt(i) >= '0' && s.charAt(i) <= '9') {
      let num = '';
      while(s.charAt(i)  >= '0' && s.charAt(i) <= '9') {
        num += s.charAt(i);
        i++;
      }
      i--;
      stack.push(parseInt(num));
    }
    else if(s.charAt(i) !== ']') {
      stack.push(s.charAt(i));
    } else {
      let temp = '';
      while(stack[stack.length-1] !== '[') {
        temp = stack.pop() + temp;
      }
      stack.pop();
      let repeat = stack.pop();
      temp = temp.repeat(repeat);
      stack.push(temp);
    }
  }
  return stack.join('');
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("100[leetcode]"));