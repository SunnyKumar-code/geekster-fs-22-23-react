const http = require("node:http");

const serverListener = (req, res) => {
    // console.log("INCOMING REQUEST", req);
    const random = Math.random();
    const data = [
        {
            id: 1,
            title: "lorem ipsum"
        },
        {
            id: 2,
            title: "asdljfaskldfsd"
        },
        {
            id: 3,
            title: "dsfgsdfg sdfg"
        }
    ]

    if (req.url === "/posts") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
            success: true,
            // message: "This is dummy GET API",
            data: [
                {
                    id: 1,
                    title: "Sample post"
                },
                {
                    id: 2,
                    title: "Sample post 2"
                },
            ]
        }));
    } else if (req.url === "/users") {
        if(req.method === "GET") {} else if (req.method === "POST") {} else {}
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
            success: true,
            // message: "This is dummy GET API",
            data: [
                {
                    id: 1,
                    userName: "ABCD"
                },
                {
                    id: 2,
                    userName: "XYZ"
                },
            ]
        }));
    } else if (req.url === "/todos") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
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
        }));
    }

    // if (req.method === "GET") {
    //     res.writeHead(200, {
    //         "Content-Type": "application/json"
    //     });
    //     res.end(JSON.stringify({
    //         success: true,
    //         message: "This is dummy GET API"
    //     }));
    // } else if (req.method === "POST") {
    //     res.writeHead(200, {
    //         "Content-Type": "application/json"
    //     });
    //     res.end(JSON.stringify({
    //         success: true,
    //         message: "This is dummy POST API"
    //     }));
    // } else {
    //     res.writeHead(404, {
    //         "Content-Type": "application/json"
    //     });
    //     res.end(JSON.stringify({
    //         success: false,
    //         message: "Route not found"
    //     }));
    // }
    // Body of the request
    // res.end(`Random NO => ${random}`); // Send the response back to the client
    // return "Hello, NodeJS!";
};

const server = http.createServer(serverListener); // Listening for the rquests coming from a client

server.listen(5000, () => console.log("Server is up and running at port 5000"));