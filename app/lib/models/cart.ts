import mongoose from "mongoose"


const { ObjectId } = mongoose.Schema
const cartSchema =new  mongoose.Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref:"Product"
            },
            name: {
                type: String
            },
            image: {
                type: String
            },
            amount: {
                type: ObjectId,
                ref:"Product"
            },
           vendor: {
               type: Object
            },
           
           size: {
               type: String
            },
           
           qty: {
               type: String
            },
           
           color: {
               color: String,
               image: String
            },
           price: Number,
           
        }
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    user: {
        type: ObjectId,
        ref:"userModel"
    }
    
}, {
    timestamps: true
})


const cartModel = mongoose.models.cartModel || mongoose.model("cartModel", cartSchema)

export default cartModel



