const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://would-you-rather.p.rapidapi.com/wyr/random",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "",
		"X-RapidAPI-Host": "would-you-rather.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
