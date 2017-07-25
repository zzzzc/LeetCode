/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const list = [];
    function backtrack(str,open,close) {
        if (close === n) 
            return list.push(str);
        
        if (open < n)
            backtrack(str+'(',open+1,close);
        
        if (close < n && close < open)
            backtrack(str+')',open,close+1);
    }
    backtrack('',0,0);
    return list;
};