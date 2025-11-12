import express from 'express';
import { getJobs, createJob, updateJob, deleteJob } from '../controllers/jobsController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Route to get all jobs
router.get('/', getJobs);

// Route to create a new job
router.post('/', authenticate, createJob);

// Route to update a job by ID
router.put('/:id', authenticate, updateJob);

// Route to delete a job by ID
router.delete('/:id', authenticate, deleteJob);

export default router;