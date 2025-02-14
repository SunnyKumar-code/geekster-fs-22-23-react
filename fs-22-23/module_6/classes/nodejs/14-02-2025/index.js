const express = require("express");
/**
 * 1. Create a server
 * 2. Register a callback listener for incoming requests
 * 3. Bind the server on a port no
 */

const server = express();

const postsList = [
    {
        id: 1,
        title: "Sample post"
    },
    {
        id: 2,
        title: "Sample post 2"
    },
    {
        id: 3,
        title: "Sample post 2"
    },
    {
        id: 4,
        title: "Sample post 2"
    },
]

const usersList = [
    {
        id: 1,
        userName: "ABCD"
    },
    {
        id: 2,
        userName: "XYZ"
    },
    {
        id: 3,
        userName: "XYZ"
    },
    {
        id: 4,
        userName: "XYZ"
    },
];

server.get("/posts", (req, res) => {
    // console.log(req.query);

    const id = req.query.id; // Query params

    if (id) {

        if (id > postsList.length) {
            res.status(204)
        }
        const post = postsList.find((p) => p.id == id);
        const data = {
            success: true,
            data: post
        };


        res
            // .status(400)
            .json(data);
    } else {
        res.json({
            success: true,
            data: postsList
        });
    }

    // res.end("GET posts API");
});

server.post("/users", (req, res) => {
    res.json({
        success: true,
        message: "Users POST API"
    })
});

server.get("/users", (req, res) => {
    // ToDo :  Send whole list of users
});

server.get("/users/:id", (req, res) => {
    const id = req.params.id; // Dynamic Param / URL Params
    const user = usersList.find(u => u.id == id);

    res.header({
        "X-API-KEY": "12345"
    });
    const data = {
        success: true,
        data: user
    };

    res.json(data);

    // res.end("GET users API");
});

server.get("/todos", (req, res) => {
    const data = {
        success: true,
        // message: "This is dummy GET API",
        data: [
            {
                id: 1,
                todoTitle: "ABCD"
            },
            {
                id: 2,
                todoTitle: "XYZ"
            },
        ]
    };
    res.json(data);
    // res.end("GET todos API")
});

server.listen(5000, () => console.log("Server is up and running on port 5000"));