const projectModel = require("../../db/models/project.model")
const myHelper = require("../../app/helper")

class Project {


    static addProject = async(req, res) => {
        try {
            const {projectName, projectImage} = req.body

            if(!projectName)
                return myHelper.resHandler(res,400, true, req.body, "Project Name is not sent" )

            // if(!projectImage)
            //     return myHelper.resHandler(res,400, true, req.body, "Project Image is not sent" )

            const projectData = new projectModel({projectName, projectImage})
            await projectData.save()

            return myHelper.resHandler(res, 200, true, projectData, "project added successfully")
        } catch (e) {
            return myHelper.resHandler(res, 500, false, e, e.message)
        }
    }


}

module.exports = Project