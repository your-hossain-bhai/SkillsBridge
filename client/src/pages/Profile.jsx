import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../services/api';
import Navbar from '../components/Navbar';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        skills: [],
    });
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [newSkills, setNewSkills] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            const profileData = await getUserProfile();
            setUser(profileData);
            setLoading(false);
        };
        fetchUserProfile();
    }, []);

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleSkillsChange = (e) => {
        setNewSkills(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = { ...user, skills: newSkills.split(',').map(skill => skill.trim()) };
        await updateUserProfile(updatedUser);
        setUser(updatedUser);
        setEditing(false);
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold">User Information</h2>
                <p className="mt-2"><strong>Name:</strong> {user.name}</p>
                <p className="mt-2"><strong>Email:</strong> {user.email}</p>
                <p className="mt-2"><strong>Skills:</strong> {user.skills.join(', ')}</p>
                <button 
                    onClick={handleEditToggle} 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {editing ? 'Cancel' : 'Edit'}
                </button>
                {editing && (
                    <form onSubmit={handleSubmit} className="mt-4">
                        <input 
                            type="text" 
                            value={newSkills} 
                            onChange={handleSkillsChange} 
                            placeholder="Enter skills, separated by commas" 
                            className="border rounded p-2 w-full"
                        />
                        <button 
                            type="submit" 
                            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Profile;