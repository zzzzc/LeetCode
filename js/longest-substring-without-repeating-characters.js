/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let len = s.length;
    let ans = 0;
    for (let i = 0 , j = 0 ; j < len ; j ++){
        let se = s.charAt(j);//s end
        if (map.has(se)){
            i = Math.max(map.get(se) , i);
        }
        map.set(se,j + 1);
        ans = Math.max(ans,j - i + 1);
    }
    return ans;
};