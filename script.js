function applyJob(jobName) {
    alert("Application submitted for: " + jobName);
}

function searchJobs() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let jobs = document.getElementsByClassName("job");

    for (let i = 0; i < jobs.length; i++) {

        let jobText = jobs[i].innerText.toLowerCase();

        if (jobText.includes(input)) {
            jobs[i].style.display = "block";
        } else {
            jobs[i].style.display = "none";
        }
    }
}