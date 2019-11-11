const btn = document.querySelector('.talk');
const request = document.querySelector('.request');
const bc  = document.querySelector('body');
const greetings = ["Like you care", "I am fine", "Go away son of the bitch"];
const DarkMode  = "the theme has been changed to the dark mode";
const LightMode  = "the theme has been changed to the light mode";
const monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
];
var backgroundColor = "light";
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const times     = getTodayDate();
const colors     = ["dark", "orange", "light"];
const speechRecognition = Window.speechRecognition || window.webkitSpeechRecognition;
const recognition       = new speechRecognition();

recognition.onstart = function(){
	console.log('voice is activated, u can speak!');
}

recognition.onresult = function(e){
	const index = event.resultIndex;
	let result = e.results[index][0].transcript;
	//request.textContent = result;
	console.log(result);
	response(result);
}

btn.addEventListener('click', ()=> {
	recognition.start();
})

function response(request)
{
	const message = handleRequest(request);
	const speech = new SpeechSynthesisUtterance();
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
	speech.text = message;
	window.speechSynthesis.speak(speech);
}

function handleRequest(request)
{
	request = request.toLowerCase();
	console.log("your request : " + request);
	let regex;
	let response;
	if(request.includes("what is your favorite team") || request.includes("is morocco your favorite team"))
		response = "deeeeeeeeeeeeeeeema raja";
	else if(request.includes("dance")){
		response = "dance mode activated";
		cha3biModeActivate();
	}
	else if(request.includes("who is your master"))
		response = "hamza is my daddy";
	else if (request.includes("f***"))
		response = "fuck you too idiot";
	else if (request.includes("how are you"))
		response = greetings[Math.floor(Math.random() * greetings.length)];
	else if (request.includes("do you love me"))
		response = "how dare you? Of course no!";
	else if (request.includes("hello"))
		response = "hey! How is your day going?";
	else if (request.includes("say a moroccan word"))
		response = "tfoo";
	else
		response = "I cant understand u";
	for(let color of colors){
		if (request.includes(`${color} mode`)){
			bc.classList.add(color);
			bc.classList.remove(backgroundColor);
			response = `${color} Mode has been activated`;
			backgroundColor = color;
		}
	}
	console.log(response);
	return response;
}

function getTodayDate(){
	var today = new Date();
	return "this is " + today.getDate() + " of " + monthNames[today.getMonth()] + " " + today.getFullYear();
}

function cha3biModeActivate()
{

}
