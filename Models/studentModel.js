import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
	firstName: {
		type: String,
		requred: true
	},
	lastName: {
		type: String,
		requred: true
	},
	email: {
		type: String,
		requred: true
	},
	password: {
		type: String,
		requred: true
	},
	contact: {
		type: String,
		requred: true
	}
})
const studentModel = mongoose.model('students', studentSchema)
export default studentModel;
