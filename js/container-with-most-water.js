/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let most = 0;
    let left = 0;
    let right = height.length - 1;
    
    while(left < right){
        most = Math.max(most, (right - left) * Math.min(height[left],height[right]));
        height[left] > height[right] ? right -- : left ++;
    }
    
    return most;
};