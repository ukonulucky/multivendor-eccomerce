import mongoose from "mongoose"



const couponSchema = new mongoose.Schema({
    coupon: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true,
        required: true, 
        minLength: 4,
        maxLength: 10
        
    },
    vendor: {
        type:Object
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,


})


const couponModel = mongoose.models.couponModel || mongoose.model("couponModel", couponSchema)


export default couponModel