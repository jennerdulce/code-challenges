// https://leetcode.com/problems/valid-palindrome/

// Problem Domain - Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
/**
 * @param {string} s
 * @return {boolean}
 */
 
var isPalindrome = function(s) {
    if(s.length <= 1) return true
    let left = 0
    let right = s.length -1
    let leftChar
    let rightChar

    // uses two pointers on each end
    while (left < right) {
        leftChar = s[left]
        rightChar = s[right]

    // check to see if right or left characters are alphanumeric
    // ignores / moves onto the next character within the string
    if (!/[a-zA-Z0-9]/.test(leftChar)) { // using regex to determine alphanumeric char
        left++ // first determines the left character until it is an alphanumeric char
    } else if (!/[a-zA-Z0-9]/.test(rightChar)){
        right-- // after a left char has been found,  while loop continues until a right has been found
    } else { // after both left and right characters have been found
        // compare letters
        if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
            return false
        }
        // continues onto the next character
        left++
        right--
        }
    }

    return true
};