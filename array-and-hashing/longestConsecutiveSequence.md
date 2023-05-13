# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- my main thought process was to sort the array and then begin comparing the current index with the next index

# Approach
<!-- Describe your approach to solving the problem. -->
- I created the necessary variables that I thought were necessary
- Created conditional if statements for potential cases
- Reset the counter and update the sequence when appropriate

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- O(n)

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    // create a variable named longestSequence that will hold longest consecutive elements
    // create a variable named counter that acts as a counter; set it to 1
    // create a variable named prevNum that stores the previous number; do not need
    // create a variable named currNum that stores the current number; do not need
    // iterate through the array
    // check if the difference between the previous number and current number is +1
    // if yes increase counter
    // if no 
        // set longestSequence to counter
        // set counter to 1
    let longestSequence = 0
    let counter = 1
    // let prevNum = 0
    // let currNum = 0
    let sortedNums = nums.sort(function(a, b){return a-b})
    console.log(sortedNums)
    for(let i = 0; i < sortedNums.length; i++){
        if(sortedNums[i + 1] - sortedNums[i] === 1){
            counter++
        } else if(sortedNums[i + 1] === sortedNums[i]){ // for duplicates
            // do nothing
        } else { // for numbers not in sequence; reset
            console.log(counter)
            if(counter > longestSequence){
                longestSequence = counter
            }
            counter = 1
        }
    }
    return longestSequence
};

// notes
// what if there are duplicates
// what if it is unsorted
// did not need currNum and prevNum
// console.log helped me debug and the problem was using an if statement instead of an else if statement
```