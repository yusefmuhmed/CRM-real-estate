const roleModel = require("../../db/models/roles.model")
const myHelper = require("../../app/helper")

class Role {


    static insertRole = async(req, res) => {
        try {
            const roleData = new roleModel(req.body)
            await roleData.save()
            myHelper.resHandler(res, 200, true, roleData, "role added successfully")
        } catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Role