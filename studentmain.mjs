//main/calling file (import)
import readline from 'readline';  //const readline=require('readline'); for js
import {Student} from './studentclass.mjs'; //const Student=require('./studentclass.mjs'); for js

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter Name       : `, (name) =>{
    rl.question(`Enter Matric no. : `, (matricno)=>{
        rl.question(`Enter Major      : `, (major)=>{

            let std= new Student(name,matricno,major);
            console.log(`______________________________________`);
            std.main();

            rl.close();
            
});
    });
        });
