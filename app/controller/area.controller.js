const areaModel = require('../../db/models/area.model');
const projectModel = require('../../db/models/project.model');
const myHelper = require('../../app/helper');

class Area {
	static addArea = async (req, res) => {
		try {
			const projectId = req.params.projectId;
			const areaName = req.body.areaName;
			let area = null;

			// check if area name is sent
				if (!areaName) {
					return myHelper.resHandler(res, 400, true, project, 'Area Name is not sent');
				}
			//

			// check if project exists
				const isProjectExists = await projectModel.findById(projectId);

				if (!isProjectExists) {
					return myHelper.resHandler(res, 404, true, isProjectExists, 'Project is not exists');
				}
			//

			// check if area exists 
				const areaData = await areaModel.find({
					projectId: projectId
				});

				const isAreaExists = areaData.length != 0;
			//

			if (isAreaExists) {
				
				const id = areaData[0]._id.toString();
				area = await areaModel.findByIdAndUpdate(
					{
						_id: id
					},
					{
						$push: {
							'areas.area': {
								areaName: areaName
							}
						}
					},
					{ new: true }
				);
				
			} else {
				area = new areaModel({
					projectId: projectId,
					areas: {
						area: [
							{
								areaName: areaName
							}
						]
					}
				});

				area.save();
			}

			return myHelper.resHandler(res, 200, true, area, 'area added successfully');
		} catch (err) {
			return myHelper.resHandler(res, 500, false, err, err.message);
		}
	};

}

module.exports = Area;
