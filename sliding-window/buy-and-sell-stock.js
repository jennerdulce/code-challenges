// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Problem Domain - Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

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
                left = right
            }
        }
        right++
    }
    return mProfit;
};

// Utilizing Sliding WIndow
// var maxProfit = function (prices) {
//     let [left, right, max] = [0, 1, 0];

//     while (right < prices.length) {
//         const canSlide = prices[right] <= prices[left];
//         if (canSlide) left = right;

//         const window = prices[right] - prices[left];

//         max = Math.max(max, window);
//         right++;
//     }

//     return max;
// };