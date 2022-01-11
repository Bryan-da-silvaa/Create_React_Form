import Question from "./Question.js"

function init() {
    var arg = process.argv;
    var header = 
                "****************************************\n" +
                "*                                      *\n" +
                "*         CREATE REACT FORM            *\n" +
                "*                                      *\n" +
                "****************************************\n";

    var dir = arg[2] || "";
    console.log(header);
    Question(dir);
}

init();