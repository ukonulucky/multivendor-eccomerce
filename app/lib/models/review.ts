import mongoose from "mongoose"

const {
    ObjectId
} = mongoose.Schema
 
const reviewSchema = new mongoose.Schema({
    reviewBy: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    review: {
        type: String,
        required: true
    }
})

const reviewModel = mongoose.models.reviewModel || mongoose.model("reviewModel", reviewSchema)
 
export default reviewModel