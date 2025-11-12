import Job from '../models/Job.js';

// Fetch all job listings
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs', error });
    }
};

// Fetch a single job by ID
export const getJobById = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job', error });
    }
};

// Create a new job listing
export const createJob = async (req, res) => {
    const { title, description, company, location, salary } = req.body;
    try {
        const newJob = new Job({ title, description, company, location, salary });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: 'Error creating job', error });
    }
};

// Update a job listing
export const updateJob = async (req, res) => {
    const { id } = req.params;
    const { title, description, company, location, salary } = req.body;
    try {
        const updatedJob = await Job.findByIdAndUpdate(id, { title, description, company, location, salary }, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: 'Error updating job', error });
    }
};

// Delete a job listing
export const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedJob = await Job.findByIdAndDelete(id);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
    }
};