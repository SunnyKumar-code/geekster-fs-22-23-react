const productCreate = async (req, res, next) => {
    res.json({
        success: true,
        message: "Product create API"
    })
};

const productList = async (req, res, next) => {
    res.json({
        success: true,
        message: "Product list API"
    })
};

const productController = {
    productCreate,
    productList
};

module.exports = productController;