/**
 * Time: O(n^2)
 * Space: O(n)
 * @param {} arr 
 */
const quickSort = (arr) => {
  let rightIndex = 0, leftIndex = 0, end = arr.length - 1;
  let pivot = partition(arr, leftIndex, rightIndex);
  while(rightIndex > leftIndex) {

  }

  temp = pivot;
  pivot = leftIndex;
  leftIndex = temp;
}

const partition = (arr, left, right) => {
  let pivot = arr[left];
}

console.log(quickSort([2, 6, 5, 0, 8, 7, 1, 3]))