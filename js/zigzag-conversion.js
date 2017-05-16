/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows <= 1) return s;
    
    const str = [...s];
    const res = [];
    let joined = '';
    let size = numRows;
    
    while (str.length) {
        const piece = str.splice(0,size);
        let item;
        if (size === numRows){
            size = numRows - 2;
            item = [...piece];
        }else{
            size = numRows;
            item = ['' , ...piece ].concat(new Array(numRows - (piece.length + 1))).reverse();
        }
        res.push(item);
    }
    // console.log(res);
    
    
    for (let j = 0; j < numRows ; j ++) {
        for (let i = 0 ; i < res.length ; i ++)  joined += res[i][j] || '';
    }
    
    
    return joined;
};