/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var helperFn = (node, hashMap) => {
  let val = node.val;
  if(!hashMap[val]) {
    let neighbors = [];
    hashMap[val] = new _Node(val);
    for(let neighbor of node.neighbors) {
      let temp = helperFn(neighbor, hashMap);
      neighbors.push(temp);
    }
    hashMap[val].neighbors = neighbors;
  }
  return hashMap[val];
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  if(!node) {
    return null;
  }
  let hashMap = {};
  return helperFn(node, hashMap);
};