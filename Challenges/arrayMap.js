function SubArray(arr, target) {
    let currentSum = arr[0];
    let start = 0;

    for (let end = 1; end <= arr.length; end++) {
        // If currentSum exceeds target, remove elements from the start
        while (currentSum > target && start < end - 1) {
            currentSum -= arr[start];
            start++;
        }

        // If currentSum equals target, we found the subarray
        if (currentSum === target) {
             // If target is achieved thus  subarray is found, return true 
            return true;
        }

        // Add the current element to currentSum
        if (end < arr.length) {
            currentSum += arr[end];
        }
    }

    // If target is not achieved thus no subarray is found, return false
    return false;
}

// Example usage:
const arr = [3, 10, 0, 8, 4, 2, 7, 1, 9, 5];
const target = 15;
const result=SubArray(arr, target);
//This  displays true since the target is achieved thus subArray 
console.log(result); 
// testing several examples to check for the expected output
//or use jest as onther alternative to check the function SubArray is it is operating as expected
console.log(SubArray([1, 2, 3, 4, 5], 20));//false
console.log(SubArray([1, 2, 3, 4, 5], 5));//true