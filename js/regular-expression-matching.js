/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const pStart = p[0];
    const sStart = s[0];
    const isMany = p[1] === '*';
    const sTail = s.substr(1);
    const pTail = p.substr(isMany ? 2 : 1);
    
    if (s === '' && p === '') return true;
    if (p === '') return false;
    if (pStart === '*') return false;
    if (s === '') return isMany && isMatch(s,pTail);
    
    if (isMany) {
        if (pStart !== '.' && pStart !== sStart) return isMatch(s,pTail);
        return isMatch(sTail,p) || isMatch(s,pTail);
    }
    
    if (pStart === '.' || sStart === pStart) return isMatch(sTail,pTail);
    
    return false;
    
};
