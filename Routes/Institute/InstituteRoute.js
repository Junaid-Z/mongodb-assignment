import express from "express";
import CreateResponse from "../../functions/CreateResponse.js";
import instituteModel from "../../Models/InstituteModel.js";
const instituteRouter = express.Router();
instituteRouter.get('/', async (req, res) => {
    try {
        res.json(CreateResponse(200, await instituteModel.find(req.body), 'OK'))
            .status(200)
    }
    catch {
        res.send("Internal server error")
            .status(400)
    }
})

instituteRouter.get('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await instituteModel.findById(req.params._id), 'OK'))
            .status(200)
    }
    catch {
        res.send("Internal server error")
            .status(400)
    }
})

instituteRouter.post('/', async (req, res) => {
    try {
        res.json(CreateResponse(200, await instituteModel.create(req.body), 'OK'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

instituteRouter.put('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await instituteModel.findByIdAndUpdate(req.params._id, req.body), 'Succesfully updated'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

instituteRouter.delete('/:_id', async (req, res) => {
    try {
        res.json(CreateResponse(200, await instituteModel.findByIdAndDelete(req.params._id), 'Succesfully updated'))
            .status(200)
    }
    catch (err) {
        console.log(err)
        res.send("Internal server error")
            .status(400)
    }
})

export default instituteRouter;
