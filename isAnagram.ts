// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    const objS = {}
    const objT = {}
    for(const letter of s){
        objS[letter] = (objS[letter] || 0) + 1
    }
    for(const letter of t){
        objT[letter] = (objT[letter] || 0) + 1
    }
    for(const elem in objS){
        if(objS[elem] !== objT[elem]){
            return false
        }
    }
    return true
};
