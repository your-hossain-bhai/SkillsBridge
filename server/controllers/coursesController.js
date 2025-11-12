import Course from '../models/Course.js';

// Get all courses
export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a course by ID
export const getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findById(id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new course
export const createCourse = async (req, res) => {
    const course = new Course(req.body);
    try {
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a course
export const updateCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a course
export const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};