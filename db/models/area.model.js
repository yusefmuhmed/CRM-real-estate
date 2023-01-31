const mongoose = require("mongoose")

const areaSchema = mongoose.Schema({
    projectId: {type:String, required: true},
    areas: {
        
        area:[{
            areaName: { type: String, required: true, trim: true },

            
            buildings: {
                
                building:[{
                    buildingNumber: { type: String, required: true, trim: true },
                    buildingImage: { type: String, trim: true },
        
                    floors: {

                        floor:[{
                            floorNumber: { type: Number, required: true },
                            
                            
                            units: {
                                unit:[{
                                    unitImages: [{ image: { type: String, trim: true } }],
                                    unitNumber: { type: Number, default: 4},
                                    unitPrice: { type: Number, default: 1000 }
                                }]

                            }
                        }]
        

        
                    }
                }]

    
            }
        }],


    }



}, { timestamps: true })

const Area = mongoose.model("Area", areaSchema)
module.exports = Area
