



function attachEventListener() {
  let count = 0;

  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button clicked", ++count);
  });
}

attachEventListener();

// setTimeout(function() {
//     console.log("timer");
// },5000)
// function x(y){
//     console.log("x");
//     y();  // Call y after x has completed execution.
// }
// x(function y(){
//     console.log("y");
// })
// function outest() {
//   var c = 20;
//   function outer(b) {
//     let a = 10;
//     function inner() {
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }
// let a =100
// var close = outest()("hey");
// close();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("done");
// }
// x();
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
// }
// x();
// function a() {
//   var b = 10;

//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();

// var x = 7;
// function getName() {
//   console.log("Asslamu Alaukum");
// }

// getName();
// console.log(x);
// console.log(getName);

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }
