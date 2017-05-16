/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    
    if (m < n) {
        return findMedianSortedArrays(nums2,nums1);
    }
    
    let half = Math.ceil((m + n) / 2); // half < m
    let i = Math.ceil(m / 2);
    
    while (true){
        let j = (half - i);
        let l1 = nums1[i - 1];
        let l2 = nums2[j - 1];
        let r1 = nums1[i];
        let r2 = nums2[j];
        
        if (l1 && r2 && l1 > r2){
            i --;
        }else if (l2 && r1 && l2 > r1){
            i ++;
        }else{
            let l = (l1 && l2) ? Math.max(l1,l2) : (l1 || l2);
            if ((m + n) % 2 !== 0) {
                return l;
            }
            let r = (r1 && r2) ? Math.min(r1,r2) : (r1 || r2);
            return  (r + l) / 2;
        }
    }
};








