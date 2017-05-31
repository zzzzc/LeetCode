/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matchMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    let list = [];
    for (let char of s) {
        if (matchMap[char]) list.push(matchMap[char]);
        else if (char !== list.pop())  return false;
    }
    
    return !list.length;
};