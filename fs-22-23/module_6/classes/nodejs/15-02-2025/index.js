const express = require("express");

const app = express();

const apiKeyValidator = (req, res, next) => {
    // Todo: Validate if a req has api key = abcd12345-xyz789
    /**
     * 1. If the api key is valid, then "ALLOW THE USER TO ACCESS THE API"
     * 2. If the api key is not valid, then "REJECT THE REQUEST WITH ERROR"
     */
    const apiKey = req.headers["x-api-key"]
    if (apiKey === "abcd12345-xyz789") {
        // Allow the req to go forward
        next();
    } else {
        // Reject the req with error
        res
            .status(403)
            .json({
                success: false,
                message: "Please pass a valid api key in x-api-key header"
            });
    }
};

// app.use(apiKeyValidator); // Middlewares

app.use((req, res, next) => {
    req.userName = "Tony";
    console.log("M1");
    // res.json({
    //     success: false
    // })
    res.json({success: true});
    return;
    try {
        
    } catch (err) {
        next("ERROR FROM M1");
    }
    // next();
})
app.use((req, res, next) => {
    console.log("M2", req.userName);
    next();
});

app.use((req, res, next) => {
    console.log("M3", req.userName);
    next();
});

app.get("/users", (req, res) => {
    console.log("USERS API");
    res.json({
        success: true,
        message: "Dummy GET Users API"
    });
});


app.post("/login", (req, res, next) => {
    console.log("LOGIN API", req.userName);
    // next();
    res.json({
        success: true,
        message: "Dummy POST login API"
    });
});

// Special middleware (Error handling middleware)

app.use((err, req, res, next) => {
    console.log("ERROR MW / SPECIAL MW", err);
    res
        .status(400)
        .json({
            success: false,
            message: "Error occured"
        });
});

app.listen(5000, () => console.log("Server is up and running on port 5000"));