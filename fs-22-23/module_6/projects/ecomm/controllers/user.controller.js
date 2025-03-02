const UserModel = require("../models/user.model");

const register = async (req, res, next) => {
    try {
        await UserModel.create(req.body);
        res.json({
            success: true,
            message: "User registered successfully"
        });
    } catch (err) {
        next(err);
    }
};

const login = (req, res) => {
    res.json({
        success: true,
        message: "Login API"
    });
};

const userController = {
    register,
    login
};

module.exports = userController;