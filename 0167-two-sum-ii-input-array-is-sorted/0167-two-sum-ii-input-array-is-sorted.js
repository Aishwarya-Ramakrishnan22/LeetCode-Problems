/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
        let l_pointer = 0
        let r_pointer = numbers.length - 1
        while (l_pointer<r_pointer){
            let total_sum = numbers[l_pointer] + numbers[r_pointer]
            if( total_sum<target){
                l_pointer = l_pointer+1
            }
            else if(total_sum>target){
                r_pointer = r_pointer - 1
            }
            else{
                return [l_pointer+1,r_pointer+1] 
            }
        }
};