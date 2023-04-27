// Ex-1: Review Callback

// function doStep1(num) {
//   let result = num + 1;
//   return result;
// }
// function doStep2(num) {
//   let result = num + 2;
//   return result;
// }
// function doStep3(num) {
//   let result = num + 3;
//   return result;
// }

// function doOperation() {
//   let init = 0;
//   let result;
//   result = doStep1(init); //1
//   result = doStep2(result); //3
//   result = doStep3(result); //6
//   console.log(`result is: ${result}`);
// }

// doOperation();

// Ex-2: Change to asynchronous task

// let result = 0;
// function doStep1() {
//   setTimeout(() => {
//     return (result += 1);
//   }, 3000);
// }
// function doStep2() {
//   setTimeout(() => {
//     return (result += 2);
//   }, 2000);
// }
// function doStep3() {
//   setTimeout(() => {
//     result += 3;
//     console.log(result);
//   }, 1000);
// }

// function doOperation() {
//   doStep1();
//   doStep2();
//   doStep3();
// }

// doOperation();
// console.log(result);

// Ex-3: Callback Hell
// let result = 0;
// function doStep1(callback) {
//   setTimeout(() => {
//     result += 1;
//     callback();
//   }, 3000);
// }
// function doStep2(callback) {
//   setTimeout(() => {
//     result += 2;
//     callback();
//   }, 2000);
// }
// function doStep3(callback) {
//   setTimeout(() => {
//     result += 3;
//     callback(result);
//   }, 1000);
// }

// function doOperation() {
//   // doStep1 => doStep2 => doStep3
//   doStep1(() => {
//     doStep2(() => {
//       doStep3((r) => console.log(r));
//     });
//   });
// }

// doOperation();
// console.log("global");

// Ex-4

function doStep1(num, calback) {
  let result = num + 1;
  calback(result);
}
function doStep2(num, calback) {
  let result2 = num + 2;
  calback(result2);
}

function doStep3(num, calback) {
  let result3 = num + 3;
  calback(result3);
}

function doOperation() {
  doStep1(0, (r1) => {
    doStep2(r1, (r2) => {
      doStep3(r2, (r3) => console.log("R3:", r3));
    });
  });
}

doOperation();
