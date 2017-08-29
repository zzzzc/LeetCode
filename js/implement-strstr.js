/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    
    let i = -1;
    while (++ i < haystack.length) {
        if (haystack[i] === needle[0] && haystack.substr(i,needle.length) === needle) return i;
    }
    return -1;
};