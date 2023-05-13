// https://leetcode.com/problems/top-k-frequent-elements/

// Problem Domain - Top K Frequent Elements
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    if(k === 1 && nums.length === 1) return [nums[0]]
    let frequentElements = totalNumberCounts(nums)
    return findFrequentElements(nums, frequentElements, k)
};

// Go through the list and tally up the frequency of each number
const totalNumberCounts = (listOfNums) => {
    let numberFrequencies = {}
    listOfNums.forEach(currentInt => {
        if(!numberFrequencies[currentInt]){ 
            numberFrequencies[currentInt] = 1 
        } else {
            numberFrequencies[currentInt] += 1
        }
    })
    return numberFrequencies
}

const findFrequentElements = (nums, frequentElements, k) => {
    // Create an obj that is the length of total numbers
    // Each key is an indicator of the occurances of a number
    // '2' means that a numbers has been shown 2 times i.e. '6' maybe means [1, 1, 1, 1, 1, 1]
        // '6': [1] shows that 1 has occured 6 times
    let count = 1
    let someObj = {}
    while(count <= nums.length){
        someObj[count] = []
        count++
    }
    
    // Assign each number to the array with the corresponding value
    let frequentElementKeys = Object.keys(frequentElements)
    frequentElementKeys.forEach(key => {
        // The key in someObj is actually the number of occurances
            // Pushes the current number into the array that has 'this' many of occurances
        someObj[frequentElements[key]].push(key)
    })

    let counter = nums.length
    let frequentNums = []
    
    // Goes through the possible frequent elements from highest to lowest and will only continue to add until the condition has been met.
        // If k = 2, will only add 2 elements to be returned
    while(frequentNums.length < k){
        if(someObj[counter].length > 0){
            someObj[counter].forEach(num => {
                if(frequentNums.length <= k)
                    frequentNums.push(num)
            })
        }
        counter--
    }
    return frequentNums
}