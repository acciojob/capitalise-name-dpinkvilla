//your JS code here. If required.
let inputfield=document.getElementById("fname");

function over(){
	inputfield.value= inputfield.value.toUpperCase();
}

inputfield.addEventListener("blur", over);