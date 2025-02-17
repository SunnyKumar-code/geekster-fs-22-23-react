const express = require("express");

const app = express();


const myMiddleware = (req, res, next) => {
    console.log("Route level middleware");
    next();
};

// Middlewares
app.use(express.json()); // Built-in middleware
app.use(express.urlencoded());
app.use(express.static("17-02-2025/images/test"));

app.get("/users", (req, res, next) => {
    const users = [
        {
            id: 1,
            name: "XYZ",
            profilePic: "/userpicture.jpg"
        },
        {
            id: 2,
            name: "ABC",
            profilePic: "s/userpicture.jpg"
        }
    ]
    res.json({
        success: true,
        message: "Dummy GET /users API",
        data: users
    });
});

app.get("/todos", myMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "Dummy GET /todos API"
    });
});

app.post("/login", (req, res) => {
    console.log(req.body);
    // if(req.body.password.length < 8) {
    //     next("Password does not meets complexity");
    // }
    res.json({
        success: true,
        message: "Dummy POST /login API"
    });
});

// Route not found middleware
app.use("*", (req, res) => {
    res
        .status(404)
        .json({
            success: false,
            message: `${req.baseUrl} Route not found`
        });
});

app.listen(5000, () => console.log("Server is up and running at port 5000"));