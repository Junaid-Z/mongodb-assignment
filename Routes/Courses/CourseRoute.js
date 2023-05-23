import express from "express";
import CreateResponse from "../../functions/CreateResponse.js";
import courseModel from "../../Models/courseModel.js";
const courseRouter = express.Router();
courseRouter.get('/', async (req, res) => {
    try {
        res.json(CreateResponse(200, await courseModel.find(req.body), 'OK'))
            .status(200)
    }
    catch {
        res.send("Internal server error")
            .status(400)
    }
})

courseRouter.get('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await courseModel.findById(req.params._id), 'OK'))
            .status(200)
    }
    catch {
        res.send("Internal server error")
            .status(400)
    }
})

courseRouter.post('/', async (req, res) => {
    try {
        res.json(CreateResponse(200, await courseModel.create(req.body), 'OK'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

courseRouter.put('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await courseModel.findByIdAndUpdate(req.params._id, req.body), 'Succesfully updated'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

courseRouter.delete('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await courseModel.findByIdAndDelete(req.params._id), 'Succesfully updated'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

export default courseRouter;
