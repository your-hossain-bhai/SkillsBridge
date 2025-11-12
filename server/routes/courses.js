import express from 'express';
import { getCourses, addCourse, updateCourse, deleteCourse } from '../controllers/coursesController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Route to get all courses
router.get('/', authenticate, getCourses);

// Route to add a new course
router.post('/', authenticate, addCourse);

// Route to update an existing course
router.put('/:id', authenticate, updateCourse);

// Route to delete a course
router.delete('/:id', authenticate, deleteCourse);

export default router;