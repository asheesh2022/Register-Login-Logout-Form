const mongoose = require("mongoose")

const userSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique:true,
            // required : "email address is required",
        //    match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },

        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 3
        }
    },
    {
        timestamps: true
    }

)

const User = mongoose.model("User" , userSchema)

module.exports = User;