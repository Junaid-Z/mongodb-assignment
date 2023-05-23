import express from "express";
import CreateResponse from "../../functions/CreateResponse.js";
import teacherModel from "../../Models/teacherModel.js";
const teacherRouter = express.Router();
teacherRouter.get('/', async (req, res) => {
    try {
        res.json(CreateResponse(200, await teacherModel.find(req.body), 'OK'))
            .status(200)
    }
    catch {
        res.send("Internal server error")
            .status(400)
    }
})

teacherRouter.get('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await teacherModel.findById(req.params._id), 'OK'))
            .status(200)
    }
    catch {
        res.send("Internal server error")
            .status(400)
    }
})

teacherRouter.post('/', async (req, res) => {
    try {
        res.json(CreateResponse(200, await teacherModel.create(req.body), 'OK'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

teacherRouter.put('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await teacherModel.findByIdAndUpdate(req.params._id, req.body), 'Succesfully updated'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

teacherRouter.delete('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await teacherModel.findByIdAndDelete(req.params._id), 'Succesfully updated'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

export default teacherRouter;
