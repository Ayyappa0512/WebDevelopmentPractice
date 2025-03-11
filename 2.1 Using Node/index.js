import qr from 'qr-image';
import fs from 'fs';
import  inquirer from 'inquirer'
import { error } from 'console';

const prompt = inquirer.createPromptModule();

let str ="";
await prompt([{message: "Enter the name:", name: "name"}]).then(answer => {
    console.log(answer.name);
    str = answer.name;
    })
    .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
console.log("Adsfadf", str);

fs.writeFile("message.txt", str, err => {
        if (err) throw error;
        console.log("file has been saved!");
    });

var qr_svg = qr.image(str);
qr_svg.pipe(fs.createWriteStream('result_qr.png'));