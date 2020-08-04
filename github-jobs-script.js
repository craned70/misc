const fetch = require('node-fetch');
const searchGitJobs = function(description, location) {
    const url = `https://jobs.github.com/positions.json?description=${description}&location=${location}`.replace(/ /g,"+");
    return fetch(url)
        .then((res) => res.json())
        .then((jobs) => {
            return jobs.map((eachJob) => {
                return {
                    title: eachJob.title,
                    location: eachJob.location,
                    company: eachJob.company
                };
            })
        })   
};

const formattedJobs = searchGitJobs("javascript", "california");
formattedJobs.then(console.log);