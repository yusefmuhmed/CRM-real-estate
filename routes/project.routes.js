const router = require("express").Router()
const Project = require('../app/controller/project.controller')
const { auth } = require("../app/middleware/auth.middleware")

router.post("/addProject", Project.insertProject)


module.exports = router