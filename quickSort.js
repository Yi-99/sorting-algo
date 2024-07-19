/**
 * Time: O(n^2)
 * Avg: O(nlogn) Worst: O(n^2)
 * Space: O(n)
 * @param {} arr 
 */
// const quickSort = (arr) => {
//   let rightIndex = arr.length - 1, leftIndex = 0;
//   let pivot = partition(arr, leftIndex, rightIndex);
//   quickSort(arr, leftIndex, pivot);
//   quickSort(arr, pivot + 1, rightIndex);
// }

// const partition = (arr, left, right) => {
//   let pivot = arr[left];
//   let low = left;

//   for (let i = left + 1; i < right; i++) {
//     if (arr[i] < pivot) {
//       let temp = arr[i];
//       arr[i] = arr[low];
//       arr[low] = temp;
//       low++;
//     }
//   }

//   let temp = arr[low];
//   arr[low] = pivot;
//   pivot = temp;

//   return low;
// }

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort([2, 6, 5, 0, 8, 7, 1, 3]))
