const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const urlSchema = mongoose.Schema({


    link: {
        type: String,
        trim: true,
        required: true,
    },

    method: {
        type: String,
        trim: true,
        required: true,
    },

    query: [{ type: String }],

    params: [{ type: String }],

    roles: [{
        role: { type: String, ref: "Role" }
    }]



}, { timestamps: true })


const Url = mongoose.model("Url", urlSchema)
module.exports = Url