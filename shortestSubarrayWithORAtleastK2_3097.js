/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  let i=0,j=0,minLength = -1;
  let temp = nums[0];
  while(i<=j) {
    if(i == j) {
      if(temp > k) return 1;
      else j++;
    }
    else {
      temp = temp ^ nums[j];
      if(temp > k) {

      } else {
        j++;
      }
      
    }
  }
};