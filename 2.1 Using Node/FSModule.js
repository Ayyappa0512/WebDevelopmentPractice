import { error } from 'console';
import fs from 'fs';
import {readFile} from 'fs'

// const { error } = require('console');
// var fs = require('fs');

// fs.writeFile("message.txt", "new Native node moudle fs write method", err => {
//     if (err) throw error;
//     console.log("file has been saved!");
// });

readFile("./message.txt", "utf8", (err,data) => {
    if(err) throw error;
    console.log(data);
});
