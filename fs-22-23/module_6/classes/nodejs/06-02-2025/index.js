/**
 * 1. Read line module
 */
const readline = require("node:readline");

const readLineDemo = () => {
    const rl = readline.createInterface({
        input: process.stdin, // Terminal or Command Prompt
        output: process.stdout // Terminal or Command Prompt
    });

    rl.question("Enter your name : ", (answer) => {
        console.log(`Welcome ${answer}`);
        rl.close();
    });
};

/**
 * 2. File system module (CRUD)
 */

const fs = require("node:fs");

const createFile = () => {
    const dataToWrite = "hello world";
    // fs.writeFile("filePath or fileName, data to write, callback fn")
    fs.writeFile("log.txt", dataToWrite, (err) => {
        if (err) {
            console.log("ERROR", err);
            return;
        }
    });

    // const err = fs.writeFileSync("log.txt", dataToWrite);
    // if (err) {
    //     console.log("ERROR", err);
    // }

};

// createFile();

const createJsonFile = () => {
    const dataToWrite = [
        {
            id: 1,
            name: "XYZ"
        },
        {
            id: 2,
            name: "ABC"
        }
    ];

    fs.writeFile("data.json", JSON.stringify(dataToWrite), (err) => {
        if (err) {
            console.log("ERROR WHILE WRITING JOSN FILE", err);
            return;
        }
        console.log("FILE WRITTEN SUCCESSFULLY");
    })
};

// createJsonFile();

const editFile = () => {
    const dataToAppend = "\nhi3 there3";
    fs.appendFile("log.txt", dataToAppend, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

// editFile();

const editFileV2 = () => {
    /**
     * 1. Read the data from file
     * 2. Change the data
     * 3. Write the data in the same file (overwrite)
     */
    fs.readFile("log.txt", (err, data) => {
        if (err) {
            console.log("ERROR", err);
            return;
        }
        let fileData = data.toString();

        fileData = "HELLO_NODE_JS\n" + fileData;

        console.log(fileData);

        fs.writeFile("log.txt", fileData, (err2) => {
            if (err2) {
                console.log("ERROR WHILE WRITING", err2);
                return;
            }
            console.log("FILE EDITED SUCCESSFULLY");
        })
    })
};

// editFileV2();


const readFile = () => {
    fs.readFile("log.txt", (err, data) => {
        if (err) {
            console.log("ERROR", err);
            return;
        }
        console.log("FILE DATA => ", data.toString());
    });
};

// readFile();


const deleteFile = () => {
    fs.unlink("log.txt", (err) => {
        if (err) {
            console.log("ERROR DELETING FILE", err);
            return;
        }
        console.log("FILE DELETED SUCCESSFULLY");
    });
};

// deleteFile();

/**
 * 3. Path (C:/Users/ABC/Desktop/log.txt)
 */

const path = require("node:path");

// console.log(__dirname);
// console.log(__filename);

const joinedPath = path.join(__dirname, "../", '../', "log.txt");
// console.log(joinedPath)

const completePath = "D:\\Divyansh\\Classes\\fs-22-23\\module_6\\classes\\resume.jpg";
const extName = path.extname(completePath);
// console.log(extName);

const parsedPath = path.parse(completePath);
console.log(parsedPath);