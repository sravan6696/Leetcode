/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let first;
  for(let i=0;i<nums.length;i++) {
    if(nums[i] > 0) {
        first = nums[i];
        break;
    }
  }
  if(!first) return 1;
  for(let i=0;i<nums.length;i++) {
    if(nums[i] <= 0) nums[i] = first;
  }
  for(let i=0;i<nums.length;i++) {
    let temp = Math.abs(nums[i]);
    if(temp > 0 && temp <= nums.length && nums[temp-1] > 0) {
        nums[temp-1] = -1*nums[temp-1];
    }
  }
  for(let i=0;i<nums.length;i++) {
    if(nums[i] > 0) return i+1;
  }
  return nums.length+1;
};