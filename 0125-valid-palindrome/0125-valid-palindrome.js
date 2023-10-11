
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l =0
    let r = (s.length)-1

    while(l<r){
        while((l<r) && !isalphaNum(s[l])){
            l+=1

        }
        while((r>l) && !isalphaNum(s[r])){
            r-=1
        }
        if(s[l].toLowerCase()!=s[r].toLowerCase()){
            return false
        }
        l=l+1
        r = r-1

    }
    return true

    
};

function isalphaNum(c){
    pattern = new RegExp("[a-zA-Z0-9]")
    return pattern.exec(c)
}