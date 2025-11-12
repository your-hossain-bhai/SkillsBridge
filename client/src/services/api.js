import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to login a user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch job listings
export const fetchJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/jobs`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch courses
export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/courses`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to fetch user profile
export const fetchUserProfile = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};