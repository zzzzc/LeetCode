/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    let int = Math.abs(x);
    
    while (int !== 0){
        let bit = int % 10;
        int = (int - bit) / 10;
        res = (res * 10  + bit);
    }
    
    if (res > 2147483647) return 0;
    
    return x >= 0 ? res : - res;
};