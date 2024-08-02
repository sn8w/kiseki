// arrow functions
// https://youtu.be/h33Srr5J9nY?si=HzudHsvKE-osAg0U

function sum(a, b) {
  return a + b;
}
let sum2 = (a,b) => a + b;

function isPositive(number) {
  return number >= 0;
}

function randomNumber() {
  return Math.random;
}

//document.addEventListener('click', function(){
//  console.log('Click')
//})

console.log(sum(3,5));
console.log(sum2(1,2));
