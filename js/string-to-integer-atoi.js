/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const num = parseInt(str);
    if (Number.isNaN(num)) return 0; 
    if (num >= 2147483647) return 2147483647; 
    if (num <= -2147483648) return -2147483648; 
    return num;
};