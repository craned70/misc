const fetch = require('node-fetch');

const searchGitJobsIP = function(description) {
    return fetch("http://ip-api.com/json/")
        .then((res) => res.json())
        .then((ip) => ip.city)
        .then((city) => {
            const url = `https://jobs.github.com/positions.json?description=${description}&location=${city}`.replace(/ /g,"+");
            return fetch(url)
                .then((res) => res.json())
                .then((jobs) => {
                    return jobs.map((eachJob) => {
                        return {
                            title: eachJob.title,
                            location: eachJob.location,
                            company: eachJob.company
                        };
                    });
                });
        });
};
searchGitJobs("javascript").then(console.log);
