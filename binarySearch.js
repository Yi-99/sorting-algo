/**
 * Time Complexity: O(log n)
 * Best Case: O(1) Worst Case: O(n)
 * The size of the list that we are searching gets halved each time we make a comparison.
 * Space Complexity: O(1)
 * It only takes one comparison to find the target element.
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
const binarySearch = (arr, target) => {
  let low = 0, high = arr.length, mid = Math.floor(arr.length / 2)
  while (arr[mid] !== target) {
    if (mid < target) {
      low = mid
      mid = Math.floor(high + low / 2)
    } else {
      high = mid
      mid = Math.floor(high / 2)
    }
  }
  return mid;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3)) // 1