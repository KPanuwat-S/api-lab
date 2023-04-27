// ร่างสัญญา Create a promise : details
function settleFn(resolveFn, rejectFn) {
  console.log("Start Promise");
  let num = Math.floor(Math.random() * 11);

  // Find even number
  if (num % 2 === 0) {
    console.log("I found even number", num);
    resolveFn("EVEN");
  } else {
    console.log("I found odd number", num);
    rejectFn("ODD");
  }
}
// เซ็นสัญญา
const promise1 = new Promise(settleFn);

// ทำตามสัญญาได้ไหม => fulfill or rejected
// console.log(promise1);
function onSuccess(result) {
  console.log("fulfill");
  console.log(result);
}

function onReject(err) {
  console.log("reject");
  console.log(err);
}

// promise1.then(onSuccess, onReject);
promise1
  .then(onSuccess)
  .catch(onReject)
  .finally(() => console.log("Finally"));
