/**
 * 1. Child Process
 */

const childProcess = require("node:child_process");

// childProcess.exec("start mspaint");
// childProcess.exec("start https://facebook.com");

/**
 * 2. Third party module : node-wifi
 */

const wifi = require("node-wifi");

wifi.init({
    iface: null
});

// wifi.scan((err, networks) => {
//     if (err) {
//         console.log("ERROR", err);
//         return;
//     }
//     console.log(networks);
// });

const msg = require("welcome_div_msg");
const chalk = require("chalk");

msg.welcomeUser("Divyansh");

console.log(chalk.blue.bgRed.bold("Message using chalk"), chalk.red("Erorr msg"));