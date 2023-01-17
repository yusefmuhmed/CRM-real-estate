const projectModel = require("../../db/models/project.model")
const myHelper = require("../../app/helper")

class Project {


    static insertProject = async(req, res) => {
        try {
            const projectData = new projectModel(req.body)
            await projectData.save()
            myHelper.resHandler(res, 200, true, projectData, "project added successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Project