import React, { useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { fetchCourses } from '../services/api';

const Learning = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await fetchCourses();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        getCourses();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading courses...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <ResourceCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Learning;