const mergeSort = (arr) => {
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));

  if (arr.length < 2) return arr;
  else return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  if (left.length === 0) return right;
  else if (right.length === 0) return left;

  let result = [];

  while (left.length != 0 && right.length != 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
ß
  while (left.length > 0) {
    result.push(left[0]);
    left.shift();
  }
  while (right.length > 0) {
    result.push(right[0]);
    right.shift();
  }

  return result;
}

console.log(mergeSort([2, 8, 5, 3, 9, 4, 1, 7]))