const myFunc = (callbackFn) => { // 2 // 3 callbackFn
  let value = 50; // 4 
  callbackFn(value); // 5
} // 7


myFunc(function(value) { // 1
  console.log(value); // 6
}) // 8
// 9 The program ends and the output is 50

function cbFn(value) {
  console.log(value);
}

myFunc(cbFn); // same thing as line 7