import React from 'react';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import ResourceCard from '../components/ResourceCard';

const Home = () => {
    const featuredJobs = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'Tech Corp',
            location: 'Remote',
            description: 'Join our team to develop cutting-edge software solutions.',
            skills: ['JavaScript', 'React', 'Node.js'],
        },
        {
            id: 2,
            title: 'Data Scientist',
            company: 'Data Inc',
            location: 'New York, NY',
            description: 'Analyze data to drive business decisions.',
            skills: ['Python', 'Machine Learning', 'SQL'],
        },
    ];

    const featuredResources = [
        {
            id: 1,
            title: 'Learn React',
            description: 'A comprehensive guide to learning React.js.',
            link: 'https://reactjs.org/docs/getting-started.html',
        },
        {
            id: 2,
            title: 'Data Science Handbook',
            description: 'An essential resource for aspiring data scientists.',
            link: 'https://www.datasciencehandbook.com/',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome to SkillBridge</h1>
                <h2 className="text-2xl font-semibold mb-4">Featured Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredJobs.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredResources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;