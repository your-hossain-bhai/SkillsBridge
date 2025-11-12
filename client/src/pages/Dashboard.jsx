import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';
import JobCard from '../components/JobCard';
import ResourceCard from '../components/ResourceCard';
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await fetchUserData();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Your Progress</h2>
                <ProgressBar progress={userData.progress} />
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Job Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userData.jobRecommendations.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold">Learning Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userData.learningResources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;