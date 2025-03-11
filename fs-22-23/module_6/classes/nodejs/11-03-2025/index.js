const express = require("express");
const Razorpay = require("razorpay");

const app = express();

const razorpay = new Razorpay({
    key_id: "rzp_test_GLJrczK2bB2W8X",
    key_secret: "PmBODMfx3bFbMeR0iIrHSdA1"
});

app.use(express.json());

app.post("/create-order", async (req, res) => {
    const amountToPay = 250; // Amount to be collected from the user for his/her order

    /**
     * 1. Create an order on razorpay with amount & razorpay will give us order id (eComm BE)
     * 2. Send this order id from step 1 to eComm FE
     * 3. With the help of order id eComm FE will load razorpay payment page (Popup load)
     * 4. User will pay the money
     */

    const order = await razorpay.orders.create({
        amount: amountToPay * 100, // amount in paisa
        currency: "INR",
        receipt: "ordr_rcpt_110220252119" // unique receipt id => order._id
    });
    console.log(order);
    res.json({
        success: true,
        orderId: order.id,
        amount: 25000
    })

});

app.listen(5000, () => console.log(`Server is up and running at port 5000`));