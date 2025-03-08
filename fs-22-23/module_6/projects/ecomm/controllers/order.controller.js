const orderCreate = async (req, res) => {
    /**
     * 1. Fetch user cart
     * 2. Total amount
     * 3. Apply coupon (Total Value)
     * 4. PLACE ORDER
     *  4.1 COD
     *  4.2 ONLINE
     * 5. Insert the order details into orders collection
     * 6. Clear the user cart
     * 7. Reduce the inventory
     * 8. Send order confirmation Email / SMS
     */
    res.json({
        success: true,
        message: "Place order API"
    })
};


const orderController = {
    orderCreate
};

module.exports = orderController;