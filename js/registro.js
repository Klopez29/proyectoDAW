//Define an array to hold users as they're added in the new registration page
var userArray = [];

if(JSON.parse(sessionStorage.getItem('passingArray')) != null){
	for(i=0;i<JSON.parse(sessionStorage.getItem('passingArray')).length;i++){
	 	userArray.push(JSON.parse(sessionStorage.getItem('passingArray'))[i]);
	};
};
//log the list of users for convenience and troubleshooting
console.log(userArray);

document.getElementById('enternew').onclick = function(){verifyNew()};
//Verify new user function
function verifyNew(){

	var un = document.getElementById('unnew').value;

 	if(userArray.length>0){
		for(i=0; i<userArray.length; i++){
			if(un == userArray[i].un){
				alert("El usuario ya existe, por favor cree uno distinto");
				document.getElementById('unnew').value = "";
				break;
			};
		};
		if(i==userArray.length){
			verifySecure();
		};
	}else{
		verifySecure();
	};
};

function verifySecure(){

	var pw = document.getElementById('pwnew').value;

	//check that the password entered is 8 characters or more
	if(pw.length>=6){
		addUser();
	}else{
		alert("Por favor ingrese una contraseña de 6 digitos como minimo");
		document.getElementById('pwnew').value = "";
	};
	
};

function addUser(){
	
	var newUser = {
		un: document.getElementById('unnew').value,
		pw: document.getElementById('pwnew').value,
	};

	//add the user to the array, put the array into the shared array, clear the inputs
	userArray.push(newUser);
	sessionStorage.setItem('passingArray', JSON.stringify(userArray));
	document.getElementById('unnew').value = "";
	document.getElementById('pwnew').value = "";
	
	window.location.href = "index.html";
				
	alert("Su registro fue un exito");

};