const router = require("express").Router()
const Building = require('../app/controller/building.controller')
const { auth } = require("../app/middleware/auth.middleware")

router.post("/add-building/:projectId/:areaId", Building.addBuilding)


module.exports = router