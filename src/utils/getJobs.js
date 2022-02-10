export function getJobs(params) {
    return fetch(`https://job-search4.p.rapidapi.com/linkedin/search?query=${params}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "job-search4.p.rapidapi.com",
            "x-rapidapi-key": "d15362807amsh21ff82b82badd18p1e0439jsn7e39c5e227ec"
        }
    })
    .then(res => {
        return res.json();
    })
    .catch(err => {
        console.log(err);
    });
}