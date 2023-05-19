# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    // create variables: left, right, profit, maxprofit
        // left = 0
        // right = 1
    let left = 0
    let right = 1
    let profit = 0
    let mProfit = 0
    // while right is does not reach past the length of the array
    while (right < prices.length) {
        // compare the left to the right prices
        if (prices[left] < prices[right]) {
            // check to see how big the profit is
            profit = prices[right] - prices[left]
            if (profit > mProfit) {
                mProfit = profit
            }
        } else {
            left = right
        }
        right++
    }
    return mProfit;
};

// Utilizing Sliding Window

var maxProfit = function (prices) {
    let [left, right, max] = [0, 1, 0];

    while (right < prices.length) {
        const canSlide = prices[right] <= prices[left];
        if (canSlide) left = right;

        const window = prices[right] - prices[left];

        max = Math.max(max, window);
        right++;
    }

    return max;
};
```