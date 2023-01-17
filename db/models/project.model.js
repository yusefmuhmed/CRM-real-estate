const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({


    projectName: { type: String, trim: true },
    projectImage: { type: String, trim: true },

    areas: [{

        areaName: { type: String, required: true, trim: true },


        buildings: [{

            buildingNumber: { type: String, required: true, trim: true },
            buildingImage: { type: String, trim: true },

            floors: [{

                floorNumber: { type: Number, required: true },

                units: [{
                    unitImages: [{ image: { type: String, trim: true } }],
                    unitNumber: { type: Number, default: 4, maxLenght: 4 },
                    unitPrice: { type: Number, default: 1000 }
                }]

            }]

        }]

    }]



}, { timestamps: true })


const Project = mongoose.model("Project", projectSchema)
module.exports = Project