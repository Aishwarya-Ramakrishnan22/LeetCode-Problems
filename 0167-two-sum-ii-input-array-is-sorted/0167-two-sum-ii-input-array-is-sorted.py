class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l_pointer,r_pointer = 0 , len(numbers) - 1
        while l_pointer<r_pointer:
            total_sum = numbers[l_pointer] + numbers[r_pointer]
            if total_sum<target:
                l_pointer = l_pointer+1
            elif total_sum>target:
                r_pointer = r_pointer - 1
            else:
                return [l_pointer+1,r_pointer+1] 