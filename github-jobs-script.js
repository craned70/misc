const fetch = require('node-fetch');

const searchGitJobs = function(description, location) {
    const url = `https://jobs.github.com/positions.json?description=${description}&location=${location}`.replace(/ /g,"+");
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            for (i of json) {
                console.log(i);
            }
        });   
};

searchGitJobs("javascript back end", "california");



  