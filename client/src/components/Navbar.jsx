import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">SkillBridge</h1>
                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-blue-200">Home</Link>
                    <Link to="/jobs" className="text-white hover:text-blue-200">Jobs</Link>
                    <Link to="/learning" className="text-white hover:text-blue-200">Learning</Link>
                    <Link to="/dashboard" className="text-white hover:text-blue-200">Dashboard</Link>
                    <Link to="/profile" className="text-white hover:text-blue-200">Profile</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;