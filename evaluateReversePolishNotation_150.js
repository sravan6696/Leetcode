var evalRPN = function(tokens) {
  let stack = [];
  for(let i=0;i<tokens.length;i++){
    if(!isNaN(tokens[i])) {
      stack.push(parseInt(tokens[i]));
    } else {
      let a = stack.pop(), 
        b = stack.pop();
      console.log(a, b, tokens[i]);
      if(tokens[i] == '+') stack.push(a+b);
      else if(tokens[i] == '-') stack.push(b-a);
      else if(tokens[i] == '*') stack.push(a*b);
      else{
        let div = b/a;
        if(div < 0) div = Math.ceil(div);
        else div = Math.floor(div);
        stack.push(div);
      }
    }
  }
  return stack.pop();
};

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));