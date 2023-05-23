import express from "express";
import dotenv from "dotenv";
dotenv.config()
import studentRouter from "./Routes/Students/StudentRoute.js";
import dbConnection from "./dbConnection.js";
import teacherRouter from "./Routes/Teachers/TeacherRoute.js";
import instituteRouter from "./Routes/Institute/InstituteRoute.js";
import courseRouter from "./Routes/Courses/CourseRoute.js";

const server = express()

server.use(express.json())
server.use('/students', studentRouter)
server.use('/teachers', teacherRouter)
server.use('/institutes', instituteRouter)
server.use('/courses', courseRouter)


dbConnection.then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Server running at port ` + process.env.PORT);
  })
}).catch((e) => {
  console.log(e)
  console.log('db connection failed')
})
