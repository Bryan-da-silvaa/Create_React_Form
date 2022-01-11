import fs from "fs";

export default function createFile(name, content, rl, arg) {
    fs.appendFile(arg + name + ".js", content, function (err) {
        if(err) {
            if (err.code == "ENOENT") {
                console.log("no such file or directory");
                process.exit(0);
            }
        } else {
            console.log("file successfully created");
        }
        rl.close();
    });
}