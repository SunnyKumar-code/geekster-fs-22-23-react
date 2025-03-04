const ProductModel = require("../models/product.model");

const productCreate = async (req, res, next) => {
    await ProductModel.create(req.body);
    res.json({
        success: true,
        message: "Product created successfully"
    });
};

const productList = async (req, res, next) => {
    const itemsPerPage = req.query.pageSize || 10;
    const pageNo = req.query.pageNo || 1;
    const searchKey = req.query.searchKey || "";

    const searchQuery = {
        $or: [
            {
                title: new RegExp(searchKey, "gi")
            },
            {
                description: new RegExp(searchKey, "gi")
            },
            {
                tags: {
                    $in: [searchKey]
                }
            }
        ]
    };

    const totalProducts = await ProductModel
        .find(searchQuery)
        .countDocuments()

    const itemsToSkip = (pageNo - 1) * itemsPerPage
    const products = await ProductModel
        .find(
            searchQuery,
            {
                title: 1,
                price: 1,
                thumbnail: 1
            })
        .skip(itemsToSkip)
        .limit(itemsPerPage)

    res.json({
        success: true,
        message: "Product list API",
        total: totalProducts,
        results: products,
    })
};

const productDetail = async (req, res, next) => {
    const productId = req.params.id;

    const product = await ProductModel.findById(productId);

    if (!product) {
        res.json({
            success: true,
            message: "No product found"
        });
        return;
    }


    res.json({
        success: true,
        message: "Product details API",
        result: product
    })
};

const productController = {
    productCreate,
    productList,
    productDetail
};

module.exports = productController;