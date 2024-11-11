/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => b[1]-a[1]);
  // console.log(boxTypes);
  let result = 0, i=0;
  while(truckSize > 0 && i < boxTypes.length) {
    if(truckSize >= boxTypes[i][0]) {
      result += boxTypes[i][1]*boxTypes[i][0];
      truckSize -= boxTypes[i][0];
      i++;
    } else {
      result += truckSize * boxTypes[i][1];
      break;
    }
    // console.log(truckSize, result);
  }
  return result;
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));