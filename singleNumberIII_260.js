/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let xor2no = 0;
  for(let num of nums) {
    xor2no = xor2no ^ num;
  }
  let lowestBit = xor2no & (-1*xor2no);
  let result = [0,0];
  for(let num of nums) {
    if(num & lowestBit) {
        result[0] = result[0] ^ num;
    } else {
        result[1] = result[1] ^ num;
    }
  }
  return result;
};