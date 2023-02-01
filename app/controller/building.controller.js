const areaModel = require('../../db/models/area.model');
const projectModel = require('../../db/models/project.model');
const myHelper = require('../../app/helper');

class Building {
	static addBuilding = async (req, res) => {
		try {
			const areaId = req.params.areaId;
			const projectId = req.params.projectId;
			const building = req.body.building;

            // check if building Number is sent
                if(!building.buildingNumber){
                    return myHelper.resHandler(res, 400, true, building, 'Building Number is not sent');
                }
            //

			// check if project exists
                const isProjectExists = await projectModel.findById(projectId);

                if (!isProjectExists) {
                    return myHelper.resHandler(res, 404, true, isProjectExists, 'Project is not exists');
                }
			//

            
			// check if area exists
                const isAreaExists = await areaModel.findOne({
                    'areas.area': {
                        $elemMatch: {
                            _id: areaId
                        }
                    }
                });

                if (!isAreaExists) {
                    return myHelper.resHandler(res, 404, true, isAreaExists, 'Area is not exists');
                }
			//

			// add building
                const addBuilding = await areaModel.findOneAndUpdate(
                    {
                        'areas.area': {
                            $elemMatch: {
                                _id: areaId
                            }
                        }
                    },
                    {
                        $push: {
                            'areas.area.$.buildings.building': building
                        }
                    },
                    { new: true }
                );
			//

			return myHelper.resHandler(res, 200, true, addBuilding, 'area added successfully');
		} catch (err) {
			return myHelper.resHandler(res, 500, false, err, err.message);
		}
	};
}

module.exports = Building;
