// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>()
    for(let idx = 0; idx < nums.length; idx++){
        const elem = numsMap.get(target - nums[idx])
        if(elem !== undefined) return [idx, elem]
        numsMap.set(nums[idx], idx)
    }
};
