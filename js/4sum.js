var threeSum = function(nums,target) {
    const res = [];
    const len = nums.length;
    
    let i = -1;
    while (++i < len - 2) {
        const current = nums[i];
        let l = i + 1;
        let r = len - 1;
        
        while (l < r) {
            const sum = current + nums[l] + nums[r];
            
            if (sum === target) {
                res.push([current, nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l+1]) l++;
                while (l < r && nums[r] === nums[r-1]) r--;
                l ++, r--;
            }else{
                 sum >= target ? r-- : l ++;
            }
           
        }
        
        while (current === nums[i + 1]) i++;
    }
    return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const sorted = nums.sort((a,b) => a - b);
    let res = [];
    let i = -1;
    while(++i < nums.length - 3) {
        const current = nums[i];
        const newTarget = target - current;
        const newNums = nums.slice(i + 1);
        res = res.concat(
            threeSum(newNums, newTarget).map(d => [current,...d])
        );
        while (nums[i + 1] === current) i ++;// next equal current
    }
    return res;
};

