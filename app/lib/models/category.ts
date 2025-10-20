import mongoose from "mongoose"
import { unique } from "next/dist/build/utils"


const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    image: [{
        publicId: String,
        url: String
    }],
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
        required: true
    },
    vendor: {
        type:Object
    }
}, {
    timestamps: true
})