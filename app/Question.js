import Model from "./Model.js"
import createFile from './createFile.js'
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var data = "";

export default function Question(arg) {

    rl.question("\nNom du fichier à créer ? : ", function(filename) {

        rl.question("\nType de l'input [text, tel, date, password, file, number, ...] : ", function(type) {

            rl.question("\nName de l'input : ", function(name) {

                rl.question("\nValue de l'input : ", function(value) {

                    rl.question("\nPlaceholder de l'input : ", function(placeholder) {

                        var templateInput = "   <input type='" + type + "' name='" + name + "' value={" + value + "} placeholder='" + placeholder + "' onChange={handleStateChange}></input>\n";
                        data += templateInput;

                        rl.question("\nMessage du bouton d'envoi : ", function(message) {

                            rl.question("\nVoulez-vous créer un autre input ? : [yes] or [no] ", function(boolean) {

                                if(boolean == "yes" || boolean == "y") 
                                    Question();
                                
                                else if(boolean == "no" || boolean == "n") {
                                    var result = Model(data, message);
                                    createFile(filename, result, rl, arg);
                                }

                            });
                        });
                    });
                });
            });
        });
    });
}