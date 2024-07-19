/**
 * Time: O(n^2)
 * Space: O(n)
 * @param {*} arr 
 * @returns 
 */
const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9, 5, 3, 1, 6, 0]))