const fs = require("node:fs");

const axios = require("axios");
const cheerio = require('cheerio');
const xlsx = require("xlsx");

const scrapper = async () => {
    const products = [];
    let pageNo = 2;
    for (let i = 0; i < 8; i++) {
        try {
            const response = await axios.get(`https://www.amazon.in/s?k=laptop+8gb+ram+1tb+ssd+16+inch+display&page=${pageNo}&xpid=aWAXZwTbkijq5&crid=61ANN2YJY3G6&qid=1739200984&sprefix=laptop+8gb+ram+1tb+ssb+16+inch+displa%2Caps%2C191&ref=sr_pg_${pageNo}`);

            const htmlData = fs.readFileSync("amazon-data.txt");
            // console.log(htmlData.toString())

            const $ = cheerio.load(response.data); // DOM Initialization

            const productCards = $("div[data-uuid]");

            // Run loop on product card and find title & price of the product
            productCards.each((index, element) => {
                const title = $(element).find("h2 > span").text();
                const price = $(element).find(".a-price-whole").text();
                if (title && price) {
                    products.push({
                        title,
                        price: Number(price.replaceAll(",", ""))
                    });
                }
            });
            pageNo++;
        } catch (err) {
            console.log("ERROR WHILE CALLING THE URL", err);
            continue;
        }
    }

    // Excel
    /**
     * Excel file (.xlsx / .xls) => Workbook
     * Sheets (n)
     * Rows & Columns (n)
     */

    const workbook = xlsx.utils.book_new(); // New empty excel workbook/file
    const sheet = xlsx.utils.json_to_sheet(products); // New sheet with products data
    xlsx.utils.book_append_sheet(workbook, sheet, "Products");
    xlsx.writeFile(workbook, "ProductsData.xlsx");

    console.log("========SCRAPPED DATA SAVED IN EXCEL FILE=======");

};

scrapper();