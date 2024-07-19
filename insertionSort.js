/**
 * 
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i-1;
    while (j >= 0 && arr[i] < arr[j]) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j--;
      i--;
    }
  }

  return arr;
}

console.log(insertionSort([3, 2, 1, 5, 4])); // [1, 2, 3, 4, 5]