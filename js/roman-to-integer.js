/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    let max = 0;
    
    return [...s].reverse().reduce(function(acc,cur) {
        const num = map[cur];
        max = Math.max(max,num);
        return (acc + (num >= max ? num : -num));   
    }  ,0);
};