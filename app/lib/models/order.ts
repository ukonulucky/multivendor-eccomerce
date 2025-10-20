import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    products: [
        {
            productId: {
                type: mongoose.SchemaTypes.ObjectId,
                product: "Product"
            },
            name: {
                type: String,
            },
            vendorId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Vendor",
                required: true
            },
            image: {
                type: String
            },
            size: {
                type: String
            },
            qty: {
                type: Number
            },
            color: {
                color: String,
                image: String
            },
            status: {
                type: String,
                default: "Not Processed"
            },
            productComplted: {
                type: Date,
                default: null
            }
        }
    ],
    shippingAddresss: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String
        },
        address1: {
            type: String
        },
        address2: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zipCode: {
            type: String
        },
        country: {
            type: String
        }
    },
    paymentMethod: {
        id: String,
    },
    paymentResult: {
        id: String,
        status: String,
        email: String
    },
    total: {
        type: Number,
        required: true
    },
    totalBeforeDiscount: {
        type: Number
    },
    couponApplied: {
        type: String
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0
    },
    taxPrice: {
        type: Number,
        default: 0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    totalSaved: {
        type:Number
    },
    rezorpay_order_id: {
        type: String
    },
    rezor_payment_id: {
        type: String
    },
    paidAt: {
        type:Date
    },
    isNew: {
        type: Boolean,
        default: true
    },

    


}, {
    timestamps: true
})

const orderModal = mongoose.models.orderModel || mongoose.model("orderModel", orderSchema)

export default orderModal