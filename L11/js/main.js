// alert("QQ");
// console.log:(qq)

let btn1 = document.querySelector('.btn1');
btn1.onclick = function(){
  document.querySelector('#ct').innerHTML = 'hello javascript';
}

let btn2_1 = document.querySelector('.btn2-1');
let btn2_2 = document.querySelector('.btn2-2');
btn2_1.onclick = function(){
  document.querySelector('#MyImage').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
}
btn2_2.onclick = function(){
  document.querySelector('#MyImage').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
}

let btn3_1 = document.querySelector('.btn3-1');
let btn3_2 = document.querySelector('.btn3-2');
btn3_1.onclick = function(){
  document.querySelector('#ct3').style.fontSize = '10px';
}
btn3_2.onclick = function(){
  document.querySelector('#ct3').style.fontSize = '60px';
}

let btn4_1 = document.querySelector('.btn4-1');
let btn4_2 = document.querySelector('.btn4-2');
btn4_1.onclick = function(){
  document.querySelector('#ct4').style.display = 'none';
}
btn4_2.onclick = function(){
  document.querySelector('#ct4').style.display = 'block';
}