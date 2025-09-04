import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("user", authSchema);

export default userModel;