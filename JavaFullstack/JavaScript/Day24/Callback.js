function f1(f){
    f();
    f();
}
 function f2(){
    console.log(200-7);
 }
 f2(f1)
 f1(function () {
  console.log(10 + 10);
});

f1(() => {
  console.log(10 * 20);
});