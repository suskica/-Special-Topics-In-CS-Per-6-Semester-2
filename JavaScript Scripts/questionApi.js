//old api
/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '355d816507msh9ae1ebcba373e28p19091cjsne755bbb9cb55',
		'X-RapidAPI-Host': 'would-you-rather.p.rapidapi.com'
	}
};

function refreshQuestion() {
	fetch('https://would-you-rather.p.rapidapi.com/wyr/random', options)
		.then(response => response.json())
		.then(json => document.getElementById("question").innerHTML = (json[0]["question"]))
		.catch(err => console.error(err));
}*/

const options = {
	method: 'GET'
};

function refreshQuestion() {
	fetch('https://would-you-rather-api.abaanshanid.repl.co/', options)
		.then(response => response.json())
		.then(json => document.getElementById("question").innerHTML = (json["data"]))
		.catch(err => console.error(err));
}
//jonah helped
window.onload = refreshQuestion;