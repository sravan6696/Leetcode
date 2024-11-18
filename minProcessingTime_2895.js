/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
  processorTime.sort((a,b) => a-b);
  tasks.sort((a,b) => b-a);
  // console.log(processorTime);
  // console.log(tasks);
  let res = Number.MIN_VALUE;
  for(let i=0;i<processorTime.length;i++){
    res = Math.max(res, processorTime[i]+tasks[4*i]);
  }
  return res;
};

minProcessingTime([8,10], [2,2,3,1,8,7,4,5]);