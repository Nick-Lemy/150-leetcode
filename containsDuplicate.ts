// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
   const numsMap = new Map()
   for(const elem of nums){
    if(numsMap.get(elem)){
        return true
    }
    numsMap.set(elem, true)
   }
   return false
};
