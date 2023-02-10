const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://would-you-rather.p.rapidapi.com/wyr/random",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "355d816507msh9ae1ebcba373e28p19091cjsne755bbb9cb55",
		"X-RapidAPI-Host": "would-you-rather.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});