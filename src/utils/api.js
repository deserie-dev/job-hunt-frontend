import { BASE_URL } from './constants';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject("Error!" + res.statusText);
}

export function getJobs ({
  search_query,
  page,
  location = '',
  job_type = ''
}) {  
  return fetch(
    BASE_URL.concat(
      `search_query=${search_query}`,
      `&page=${page}`,
      location ? `&location=${location}` : '',
      job_type ? `&job_type=${job_type}` : ''
    ),
    {
      method: 'GET',  
      headers: {
        "x-rapidapi-host": "awesome-indeed.p.rapidapi.com",
		    "x-rapidapi-key": "d15362807amsh21ff82b82badd18p1e0439jsn7e39c5e227ec"
      }
    })
      .then(checkResponse)
}

// export function getJobs(term) {
//     return fetch(`https://job-search4.p.rapidapi.com/linkedin/search?query=${term}`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "job-search4.p.rapidapi.com",
//             "x-rapidapi-key": "d15362807amsh21ff82b82badd18p1e0439jsn7e39c5e227ec"
//         }
//     })
//     .then(res => {
//         return res.json();
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// fetch("https://awesome-indeed.p.rapidapi.com/indeed_jobs_detailed?search_query=web%20developer&page=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "awesome-indeed.p.rapidapi.com",
// 		"x-rapidapi-key": "d15362807amsh21ff82b82badd18p1e0439jsn7e39c5e227ec"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });