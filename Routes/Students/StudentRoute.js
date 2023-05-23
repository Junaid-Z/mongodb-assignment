import express from "express";
import studentModel from "../../Models/studentModel.js";
import CreateResponse from "../../functions/CreateResponse.js";
const studentRouter = express.Router();
studentRouter.get('/', async (req, res) => {
	try {
		res.json(CreateResponse(200, await studentModel.find(req.body), 'OK'))
			.status(200)
	}
	catch {
		res.send("Internal server error")
			.status(400)
	}
})

studentRouter.get('/:_id', async (req, res) => {
	try {
		res.json(CreateResponse(200, await studentModel.findById(req.params._id), 'OK'))
			.status(200)
	}
	catch {
		res.send("Internal server error")
			.status(400)
	}
})

studentRouter.post('/', async (req, res) => {
	try {
		res.json(CreateResponse(200, await studentModel.create(req.body), 'OK'))
			.status(200)
	}
	catch (err) {
		console.log(err)
		res.send("Internal server error")
			.status(400)
	}
})

studentRouter.put('/:_id', async (req, res) => {
	try {
		res.json(CreateResponse(200, await studentModel.findByIdAndUpdate(req.params._id, req.body), 'Succesfully updated'))
			.status(200)
	}
	catch (err) {
		console.log(err)
		res.send("Internal server error")
			.status(400)
	}
})

studentRouter.delete('/:_id', async (req, res) => {
	try {
		res.json(CreateResponse(200, await studentModel.findByIdAndDelete(req.params._id), 'Succesfully updated'))
			.status(200)
	}
	catch (err) {
		console.log(err)
		res.send("Internal server error")
			.status(400)
	}
})

export default studentRouter;
