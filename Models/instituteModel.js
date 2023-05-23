import mongoose from "mongoose";
const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    address: {
        type: String,
        requred: true
    },
    shortName: {
        type: String,
        requred: true
    },
    tel: {
        type: String,
        requred: true
    }
})
const instituteModel = mongoose.model('institutes', instituteSchema)
export default instituteModel;
