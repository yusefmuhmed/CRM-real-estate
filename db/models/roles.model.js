const mongoose = require("mongoose")


const roleSchema = mongoose.Schema({


    roleTitle: { type: String, trim: true, unique: true },


}, { timestamps: true })



roleSchema.virtual("myUrls", {
    ref: "Urls",
    localField: "roleTitle",
    foreignField: "roles.role"
})


roleSchema.virtual("myUsers", {
    ref: "Users",
    localField: "roleTitle",
    foreignField: "roleName"
})



const Role = mongoose.model("Role", roleSchema)
module.exports = Role