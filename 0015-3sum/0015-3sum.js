/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)

    for( let i=0;i<nums.length;i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue
        }
        let l = i+1
        let r = (nums.length)-1
        while(l<r){
            let threesum = nums[i] + nums[l] + nums[r]
            if(threesum>0){
                r = r-1
            }
            else if(threesum<0){
                l = l+1
            }
            else{
                res.push([nums[i],nums[l],nums[r]])
                l = l+1
                while(nums[l]==nums[l-1] && l<r){
                    l= l+1
                }
            }

        }

    }  return res
};

