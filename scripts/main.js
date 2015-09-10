//var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Hello world!';

//Image switcher code
var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/casablanca.gif'){
		myImage.setAttribute('src', 'images/gloria.gif');
	}else{
		myImage.setAttribute('src', 'images/casablanca.gif');	
	}
}

//personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'gay or straight? ' + myName;

}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'gay or straight? ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}
