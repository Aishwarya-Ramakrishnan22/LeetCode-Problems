/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest = 0
    let length = 0
    let setnum = new Set(nums)
    for(n of setnum){
        if(!setnum.has(n-1)){
        length=0

        
        while(setnum.has(n + length)){
            length+=1
        }
        }
        longest = length>longest?length:longest
    }
    return longest
};