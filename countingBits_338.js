/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  var output = [0], pow = 1;
  for(var i=1;i<=n;i++){
      if(i == 2*pow) pow = i;
      if(i == 1) output.push(1);
      else{
          output.push(output[i-pow]+1);
      }
  }
  return output;
};
