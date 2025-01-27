// alart("gg")
// console.log("gg")
// i+=2會是13579
for(let i=1;i<=16;i++){
	document.querySelector('.btn'+i+' img').style.display = 'none';
	document.querySelector('.btn'+i+'').onclick = function(){
	  if(document.querySelector('.btn'+i+' img').style.display == 'none'){
	  	 document.querySelector('.btn'+i+' img').style.display = 'block';
	  }
	  else{
	  	document.querySelector('.btn'+i+' img').style.display == 'none';
	  }
	}
}
