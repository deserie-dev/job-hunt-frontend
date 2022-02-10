class JobsApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  getJobs(params) {
    return fetch(this.baseUrl + `/linkedin/search?query=${params}`, {
        method: "GET",
        headers: this.headers
    })
    .then((res) => this._checkResponse(res));
  }
}

const jobsApi = new JobsApi({
    baseUrl: "https://job-search4.p.rapidapi.com",
    headers: {
        "x-rapidapi-key": "d15362807amsh21ff82b82badd18p1e0439jsn7e39c5e227ec"
    },
});

export default jobsApi;