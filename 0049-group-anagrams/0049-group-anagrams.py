class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

       
        for n in strs: 
            count = [0] * 26

            for s in n:
                count[ord(s) - ord("a")] += 1

            res[tuple(count)].append(n)

        return list(res.values())

        
        
        