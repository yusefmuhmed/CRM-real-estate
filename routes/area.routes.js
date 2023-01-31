const router = require("express").Router()
const Area = require('../app/controller/area.controller')
const { auth } = require("../app/middleware/auth.middleware")

router.post("/add-area/:projectId", Area.addArea)


module.exports = router