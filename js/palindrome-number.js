/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const str = String(x);
    return str === [...str].reverse().join('');
};