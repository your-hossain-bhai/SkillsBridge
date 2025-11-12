import React from 'react';

const ResourceCard = ({ resource }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={resource.imageUrl} alt={resource.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{resource.title}</div>
                <p className="text-gray-700 text-base">{resource.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {resource.skills.map((skill, index) => (
                    <span key={index} className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                        {skill}
                    </span>
                ))}
            </div>
            <div className="px-6 pb-4">
                <a href={resource.link} className="text-blue-500 hover:text-blue-800">
                    Learn More
                </a>
            </div>
        </div>
    );
};

// Example placeholder data
const exampleResource = {
    title: "Introduction to React",
    description: "A comprehensive guide to learning React, covering all the basics and advanced concepts.",
    imageUrl: "https://via.placeholder.com/150",
    skills: ["React", "JavaScript", "Frontend Development"],
    link: "https://example.com/resource"
};

export default ResourceCard;