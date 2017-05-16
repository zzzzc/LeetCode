/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    
    let i = -1;
    while(++i < nums.length) {
        const cur = nums[i];
        const match = target - cur;
        if (map.has(match)) return [map.get(match), i];
        map.set(cur, i);
    }
    return null;
};