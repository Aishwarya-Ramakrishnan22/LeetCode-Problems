import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l,r=0,len(s)-1
        while (l<r):
            while (l<r) and not self.alphaNum(s[l]):
                 l+=1
            while(r>l)and not self.alphaNum(s[r]):
                 r-=1
            if s[l].lower()!=s[r].lower():
                return False
            l,r=l+1,r-1
        return True



    def alphaNum(self,c):
        pattern = re.compile(r'[a-z0-9]')
        return bool(pattern.match(c) or pattern.match(c.lower()))


        