fetch("https://job-search4.p.rapidapi.com/linkedin/search?query=Software%20Engineer&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "job-search4.p.rapidapi.com",
		"x-rapidapi-key": "d15362807amsh21ff82b82badd18p1e0439jsn7e39c5e227ec"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});