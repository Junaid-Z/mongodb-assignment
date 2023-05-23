import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    course: {
        type: String,
        requred: true
    },
    contact: {
        type: String,
        requred: true
    }
})
const teacherModel = mongoose.model('teachers', teacherSchema)
export default teacherModel;
