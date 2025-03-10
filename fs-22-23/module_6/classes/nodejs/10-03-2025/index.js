const stripe = require('stripe')('YOUR SECRET KEY');
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/payment", async (req, res) => {
    const amount = req.body.amount;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount, // amount in paisa
        currency: "usd"
    });

    res.json({
        success: true,
        message: "Payment API",
        clientSecret: paymentIntent.client_secret
    })
});

app.listen(5000, () => console.log(`Server is up and running at port 5000`));