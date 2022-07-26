const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter a valid name"],
    },
    avatar:{
        public_id: String,
        url: String, 
    },
    email:{
        type: String,
        required: [true, "Please Enter a valid email"],
        unique: [true, "Email already exist"],
    },
    password:{
        type: String,
        required:[true, "Please enter a password"],
        minLenght: [6, "Password must be minimum 6 characters"],
        select: false,
    },
    post:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Post",
        },
    ],
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

module.exports = mongoose.model("Usert", postSchema);