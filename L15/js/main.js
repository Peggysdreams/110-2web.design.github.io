let circle = document.querySelector('.circle');
let words = document.querySelector('.words');
let hands = document.querySelector('.hands');

setTimeout(function(){
   circle.classList.add('circleFadIn');
}, 1000);
setTimeout(function(){
   words.classList.add('wordsFadIn');
}, 3000);
setTimeout(function(){
   hands.classList.add('handsFadIn');
}, 4000);