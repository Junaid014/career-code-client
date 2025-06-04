import { useEffect, useState } from "react";



const HotJobs = () => {

       const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div>
            {jobs.length}
        </div>
    );
};

export default HotJobs;