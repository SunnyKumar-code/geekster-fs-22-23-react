const JobModel = require("../model/job.model");

const jobCreate = async (req, res, next) => {
    try {
        console.log(req.body);
        // Insert data into DB
        const jobObj = {
            ...req.body,
            isVacant: true
        }

        const response = await JobModel.create(jobObj); // db.jobs.insertOne()
        console.log(response);
        res.json({
            success: true,
            message: `Job created successfully with id ${response._id}`
        });
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const jobList = (req, res) => {
    res.json({
        success: true,
        message: "List Job API"
    });
};

const jobEdit = (req, res) => {
    res.json({
        success: true,
        message: "Edit Job API"
    });
};

const jobDelete = (req, res) => {
    res.json({
        success: true,
        message: "Delete Job API"
    });
};

const jobController = {
    jobCreate,
    jobList,
    jobEdit,
    jobDelete
};

module.exports = jobController;