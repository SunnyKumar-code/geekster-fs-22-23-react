const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/user.model");

const JWT_SECRET_KEY = "MY_SECRET_KEY_12345";

const register = async (req, res, next) => {
    try {
        // const plainTextPassword = req.body.password;
        // const salt = await bcrypt.genSalt(10); // Extra added security on top of your password hash
        // const cipherTextPassword = await bcrypt.hash(plainTextPassword, salt);
        await UserModel.create(req.body);
        res.json({
            success: true,
            message: "User registered successfully"
        });
    } catch (err) {
        next(err);
    }
};

const login = async (req, res) => {
    /**
     * Login successful => email & password combination should match
     */

    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        res
            .status(400)
            .json({
                success: false,
                message: "Incorrect username or password"
            });
        return;
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    // JWT => JSON Web Token (String)
    if (isPasswordValid) {

        const currentTimeInSec = parseInt(Date.now() / 1000);
        const tokenData = {
            iat: currentTimeInSec,
            exp: currentTimeInSec + 3600,
            _id: user._id
        };
        const token = jwt.sign(tokenData, JWT_SECRET_KEY);

        // DB update for this token / Store this token in DB
        await UserModel.findByIdAndUpdate(user._id, { token: token });
        res.json({
            success: true,
            message: "Logged in successfully",
            token: token
        })
        return;
    }
    res.status(400).json({
        success: false,
        message: "Incorrect username or password"
    });
};

const userController = {
    register,
    login
};

module.exports = userController;