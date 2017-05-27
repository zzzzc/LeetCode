/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const sorted = nums.sort((a,b)=>a-b);
    const len = sorted.length;
    let res = Infinity;
    let i = -1;
    while(++i < len - 2) {
        let left = i + 1;
        let right = len - 1;
        while(left < right) {
            const sum = sorted[left] + sorted[right] + sorted[i];
            if (sum === target) {
                return target;
            }
            if ( Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }
            
            sum - target > 0 ? right -- : left ++;
        }
    }
    return res;
};