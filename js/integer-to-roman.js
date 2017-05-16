function digitToRomanStr(num,a,b,c) {
    if (num < 4) return (a + a + a).substr(0,num);
    if (num === 4) return a + b;
    if (num === 5) return b;
    if (num < 9) return b + digitToRomanStr(num - 5 , a);
    if (num === 9) return a + c;
    return '';
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const sets = [['I','V','X'],['X','L','C'],['C','D','M'],['M']];
    const numStr = String(num);
    return [...numStr].map((d,i) => digitToRomanStr(Number(d),...sets[numStr.length - i - 1])).join('');
};