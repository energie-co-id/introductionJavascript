const fs = require("fs")
fs.writeFile("message.txt", "Hello World", (err)) => {
    if (err) {
        throw err
    }
    console.log("file has been write")
}