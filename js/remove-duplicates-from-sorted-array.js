/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length > 1) {
        let i = 1;
        while (i < nums.length){
            nums[i] === nums[i-1] ? 
                nums.splice(i,1) : // The 'nums' should be changed;
                i++;
        }
    }
    
    return nums.length;
};