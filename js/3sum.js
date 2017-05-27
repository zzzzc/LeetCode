/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    const len = nums.length;
    
    nums.sort((a,b) => a - b);
    
    let i = 0;
    while (++i < len - 1) {
        const midNum = nums[i];
        let l = 0;
        let r = len - 1;

        while(l < i && r > i && l < r) {
            const sum = nums[l] + midNum + nums[r];
            
            if (sum === 0) {
                res.push([nums[l], midNum, nums[r]]);
                while (l < r && nums[l] === nums[l+1]) l++;
                while (l < r && nums[r] === nums[r-1]) r--;
                l ++; r--;
            }else{
                 sum >= 0 ? r-- : l ++;
            }
           
        }
    }
    
    const unique = new Set();
    return res.filter(d => {
        const nums = d.join(',');
        return unique.has(nums) ? false : unique.add(nums);
    });
};
