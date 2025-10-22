import mongoose from "mongoose"
import reviewModel from "./review"
import { StringXor } from "next/dist/compiled/webpack/webpack"
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    longDescription: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: ObjectId,
        required: true,
        ref: "Category"
    },
    subCategoryId: [
        {
            type: ObjectId,
            ref: "subCategory"
        }
    ],
    details: [
        {
            type: String,
            value: String
        }
    ],
    benefits: [
        {
            name: String
        }
    ],
    ingredients: [
        {
            name: String
        }
    ],
    reviews: [{
        type: ObjectId,
        ref: "reviewModel"
    }],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    vendor: {
        type:Object
    },
    subProducts: [
        {
            sku: String,
            images: [],
            descriptionImages: [],
            color: {
                color: String,
                image:String
            },
            sizes: [
                {
                size: String,
                qty: Number,
                price: Number,
                sold: {
                    type: Number,
                    default: 0
                }
            }]
        }
    ],
    discount: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const productModel = mongoose.models.productModel || mongoose.model("productModel", productSchema)
 
export default productModel