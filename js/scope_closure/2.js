function bar(){
  console.log(myName);
}
function foo(){
  var myName = "Jane";
  bar();
  console.log(myName);
}
var myName = "Tom";
foo();