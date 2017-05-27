/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const keyMap = ['','*','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    
    if (digits === '') return [];
    if (digits.length === 1) return [...keyMap[digits]];
        
    const before = digits.substr(0, digits.length - 1);
    const last = digits.substr(-1);
    return letterCombinations(before)
        .map(str => [...keyMap[last]].map(d => str + d))
        .reduce((acc,cur) => [...acc,...cur],[]);
};