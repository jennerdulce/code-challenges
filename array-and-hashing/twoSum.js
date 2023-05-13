// https://leetcode.com/problems/two-sum/

// Problem Domain - Two Sum
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let newMap = createMap(nums)
    return getNumbers(nums, target, newMap)
};

// Helper function to create a map
const createMap = (nums, map = new Map()) => {
    nums.forEach((value, index) => {
        map.set(value, index)
    })
    console.log('map:', map)
    return map
}

// Logic to make the comparison and to ensure that current number is not the difference
const getNumbers = (numbers, target, map) => {
    for(let i = 0; i < numbers.length; i++){
        let numberDifference = target - numbers[i]
        let indexOfDifference = map.get(numberDifference)
        let isNotCurrentNumber = map.has(numberDifference) && map.get(numberDifference) !== i
        if (isNotCurrentNumber) return [i, indexOfDifference]
    }
}

// ** Other solution
// For each num
// Get difference and check to see if difference is in map
// if is, check to see if index of difference matches current index => add number continue to next iteration
// else => return indexs of current index and index of difference