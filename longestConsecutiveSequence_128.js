/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = {}, seqMap = {}, seqNum = 0;
  for(let num of nums) {
    if(num in map) {
    
    } else if(num-1 in map) {
        map[num] = map[num-1];
        seqMap[map[num-1]].push(num);
        let temp2 = map[num+1];
        if(num+1 in map && map[num+1] != map[num-1]) {
            let temp = seqMap[map[num+1]];
            for(let t of temp) {
                map[t] = map[num-1];
                seqMap[map[num-1]].push(t);
            }
            // delete seqMap[temp];
        }
    } else if (num+1 in map) {
        map[num] = map[num+1];
        seqMap[map[num+1]].push(num);
    } else {
        map[num] = seqNum;
        seqMap[seqNum] = [num];
        seqNum++;
    }
    // console.log(num, seqMap, map);
  }
  let ans = 0;
  console.log(seqNum);
  for(let k in seqMap) {
    ans = Math.max(ans, seqMap[k].length);
  }
  return ans;
};