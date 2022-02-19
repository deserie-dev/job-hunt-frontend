const baseUrl = "https://www.themuse.com/api/public/jobs";
const API_KEY = "94aaffb424ee169e233b76862820e2e20287edf6c5110839dbc54094da5d451a";

class JobsApi {
    getJobs (query) {
        return fetch(
          `${baseUrl}?page=1&category=${query}&apiKey=${API_KEY}`
        )
        .then((res) => res.json())
        .then((data) => data);
    };
}

const jobsApi = new JobsApi();

export default jobsApi;
  