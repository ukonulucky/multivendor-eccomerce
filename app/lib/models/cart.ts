import mongoose from "mongoose"

const cartSchema =new  mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.ObjectId,
                ref:"Product"
            },
            name: {
                type: String
            },
            image: {
                type: String
            },
            amount: {
                type: mongoose.Schema.ObjectId,
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
        type: mongoose.Schema.ObjectId,
        ref:"UserModel"
    }
    
}, {
    timestamps: true
})


const cartModel = mongoose.models.cartModel || mongoose.model("cartModel", cartSchema)

export default cartModel



