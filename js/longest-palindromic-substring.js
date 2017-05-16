/**
 * @param {string} s
 * @return {string}
 */ 
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    
    function extend(s,i,j){
        while (i >= 0 && j < len && s[i] === s[j]){
            i --;
            j ++;
        }
        
        if ((j - i) - 1 > right - left){
            left = i + 1;
            right = j;
        }
    }
    
    let len = s.length;
    let start = 0;
    let left = 0;
    let right = 1;
    
    for (let start = 0 ; start < len ; start ++){
        extend(s,start,start);
        extend(s,start,start + 1);
    }
    
    return s.substring(left,right);
};