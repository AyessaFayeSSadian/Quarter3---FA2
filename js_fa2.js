var num1;
var num2;
var res;


function addFunction(){
	
	num1 = document.getElementById("Num1");
    num2 = document.getElementById("Num2");
	res = parseInt(num1.value) + parseInt(num2.value);
	
	document.getElementById("demo").innerHTML = "The sum of " + num1.value + " and " + num2.value + " is " + res;
	
	
}

function subFunction(){
	
	num1 = document.getElementById("Num1");
    num2 = document.getElementById("Num2");
	res = parseInt(num1.value) - parseInt(num2.value);
	
	document.getElementById("demo").innerHTML = "The difference of " + num1.value + " and " + num2.value + " is " + res;
	
	
}

function mulFunction(){
	
	num1 = document.getElementById("Num1");
    num2 = document.getElementById("Num2");
	res = parseInt(num1.value) * parseInt(num2.value);
	
	document.getElementById("demo").innerHTML = "The product of " + num1.value + " and " + num2.value + " is " + res;
	
	
}

function divFunction(){
	
	num1 = document.getElementById("Num1");
    num2 = document.getElementById("Num2");
	res = parseInt(num1.value) / parseInt(num2.value);
	
	document.getElementById("demo").innerHTML = "The difference of " + num1.value + " and " + num2.value + " is " + res;
	
	
}

function modFunction(){
	
	num1 = document.getElementById("Num1");
    num2 = document.getElementById("Num2");
	res = parseInt(num1.value) % parseInt(num2.value);
	
	document.getElementById("demo").innerHTML = "The remainder of " + num1.value + " and " + num2.value + " is " + res;
	
	
}
	
	