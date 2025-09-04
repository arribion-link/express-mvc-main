/**
 * The above code defines functions for user registration and login using bcrypt for password hashing
 * and validation.
 * @param req - `req` stands for the request object in Node.js. It represents the HTTP request that is
 * sent from the client to the server. The `req` object contains information about the request such as
 * the URL, headers, parameters, body, etc. In the provided code snippets, `req` is
 * @param res - The `res` parameter in your code represents the response object in Express.js. It is
 * used to send a response back to the client making the request. You can use methods on the `res`
 * object like `res.status()` to set the HTTP status code of the response, `res.json()`
 * @returns The code provided contains two functions: `register` and `login`, which are used for user
 * registration and user login, respectively.
 */
import userModel from "../models/authSchema.js";
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

export const login = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required!",
            });
        }

        const matchUser = await userModel.findOne({ email });
        if (!matchUser) {
            return res.status(400).json({
                message: 'user does not exist, Register first'
            });
        }



        const matchPassword = await bcrypt.compare(
            password,
           matchUser.password
        );
        if (!matchPassword) {
            return res.status(400).json({
                message: "Password provided is wrong try again"
            });
        }

        res.status(200).json({
            success: true,
            message: "User logged in sucessfully"
        });
        
    } catch (err) {
          res.status(500).json({
            success: false,
            message: "error logging in the user",
          });
    }
}

export default { register, login }