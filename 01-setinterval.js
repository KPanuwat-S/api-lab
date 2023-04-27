function execute() {
  console.log("hello!1");
}

// Async
let id = setInterval(execute, 500);
console.log("global");
console.log("id", id);

setTimeout(() => {
  clearInterval(id)
})