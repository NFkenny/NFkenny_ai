function bar() {
  console.log(myName);
}
function foo() {
  var myName = "Jane";
  bar();
}
var myName = "Tom";
foo();