// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
   const numsSet = new Set<number>()
   for(const elem of nums){
    if(numsSet.has(elem)){
        return true
    }
    numsSet.add(elem)
   }
   return false
};
