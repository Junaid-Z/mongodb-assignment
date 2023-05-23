import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    duration: {
        type: String,
        requred: true
    },
    fees: {
        type: Number,
        requred: true
    },
    shortName: {
        type: String,
        requred: true
    }
})
const courseModel = mongoose.model('courses', courseSchema)
export default courseModel;
