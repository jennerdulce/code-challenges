// https://leetcode.com/problems/valid-anagram/

// Problem Domain - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isAnagram = function(s, t) {
    // split and sort both strings in alphabetical order
    // create conditional statement
    // if strings are equal => return true
    // else => return false
    let newS = s.split('').reverse().sort().join('')
    let newT = t.split('').reverse().sort().join('')
    return (newS === newT ? true : false)
};