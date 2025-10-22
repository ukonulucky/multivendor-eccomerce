import mongoose from "mongoose"
import { unique } from "next/dist/build/utils"

const { ObjectId } = mongoose.Schema


const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    images: [
        {
            url: String,
            publicId:String
        }
    ],
    vendor: {
        type: Object,
        ref: "Vendor"
    },
    parent: {
        type: ObjectId,
        ref: "Category",
        required: true
    }

})



const subCategoryModel = mongoose.models.subCategory || mongoose.model("subCategory", subCategorySchema)

export default subCategoryModel 