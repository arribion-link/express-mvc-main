import userModel from "../models/authSchema";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required!"
            });
        }

        const userExist = await userModel.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                message: "User already exist"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const userData = {
            username,
            email,
            password:hashPassword
        }

        const newUser = new userModel(userData);
        await newUser.save();

        res.status(200).json({
            success: true,
            message:"user saves successfully"
        })
        
    } catch (err) {
         res.status(200).json({
           success: false,
           message: "Error Registering the user",
         });
    }
}

export const login = (req, res) => {
    res.send('Login Route')
}

export default { register, login }