// https://leetcode.com/problems/contains-duplicate/

// Problem Domain - Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 1
var containsDuplicate = function (nums) {
    let visitedNums = {}
    let duplicate = false
    nums.forEach(num => {
        if (visitedNums[num]) {
            duplicate = true
            return
        } else {
            visitedNums[num] = true
        }
    })
    return duplicate
};

// Solution 2
var containsDuplicate = function (nums) {
    let duplicate = false
    let visitedNums = []
    nums.forEach(num => {
        if (visitedNums.includes(num)) {
            duplicate = true
            return
        } else {
            visitedNums.push(num)
        }
    })
    return duplicate
};

// Solution 3
var containsDuplicate = function (nums) {
    let visitedNums = {}
    let hasDuplicate = false

    while (!hasDuplicate) {
        nums.forEach(num => {
            if (visitedNums[num]) {
                hasDuplicate = true
            } else {
                visitedNums[num] = true
            }
        })
    }
    return hasDuplicate
};