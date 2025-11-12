import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <div className="font-bold text-xl mb-2">{job.title}</div>
            <p className="text-gray-700 text-base mb-4">{job.company}</p>
            <p className="text-gray-600 text-sm mb-4">{job.location}</p>
            <p className="text-gray-600 text-sm mb-4">{job.description}</p>
            <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">{job.postedDate}</span>
                <a href={job.applyLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                </a>
            </div>
        </div>
    );
};

// Example placeholder data
const exampleJob = {
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    description: "We are looking for a skilled Software Engineer to join our team.",
    postedDate: "Posted 2 days ago",
    applyLink: "#"
};

export default JobCard;