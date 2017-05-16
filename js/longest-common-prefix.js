/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let longest = strs[0];
    let i = 0;
    while (++i < strs.length && longest){
        let s = strs[i];
        for (let i = 0 ; i < longest.length ; i ++){
            if (longest[i] === s[i]) continue;
            longest = longest.substr(0,i);
            break;
        }
    }
    
    return longest || '';
};