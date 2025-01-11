/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let output = [];
  for(let i=0;i<nums.length;i++) {
      if(i == 0){
          output.push(1);
      } else {
          output.push(nums[i-1]*output[i-1]);
      }
  }

  let temp = 1;
  for(let i=nums.length-1;i>=0;i--) {
      if(i!==nums.length-1) {
          temp = temp*nums[i+1];
          output[i] = output[i]*temp;
      }
  }

  return output;
};