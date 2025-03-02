const mongoose = require("mongoose");

const userSchemaObject = {
    "email": {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },
    "password": {
        type: String,
        required: true
    },
    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: false,
        default: "NA"
    },
    "mobileNo": {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^\d{10}$/.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    "gender": {
        type: String,
        required: true,
        enum: ["MALE", "FEMALE", "OTHERS"] // List of allowed values
    }
};

const userSchema = new mongoose.Schema(userSchemaObject);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;