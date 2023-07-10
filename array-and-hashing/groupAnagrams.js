// https://leetcode.com/problems/group-anagrams/

// Problem Domain - Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    // create obj / map to contain all of anagrams
    let listOfAnagrams = {}
    // for each string:
        // sort to alphabetical order
        // check to see if string exists in the obj
        // if true => add original string (not sorted) to the array of the particular anagram that is sorted
        // if false => create new key for the anagram (sort anagram to alphabetical order), set value to an array, add current string (unsorted) to the array
    strs.forEach(currentStr => {
        let sortedStr = currentStr.toLowerCase().split('').sort().join('')
        if(listOfAnagrams[sortedStr]){
            listOfAnagrams[sortedStr].push(currentStr.toLowerCase())
        } else {
            listOfAnagrams[sortedStr] = []
            listOfAnagrams[sortedStr].push(currentStr.toLowerCase())
        }
    })
    // Add all arrays of anagrams to a single list
    return Object.values(listOfAnagrams)
};