/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0, curr = nums[0];
  for(let num of nums) {
      if(count === 0) {
          curr = num;
      }
      count += (num === curr) ? 1 : -1;
  }
  return curr;
};