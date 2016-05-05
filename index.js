#!/usr/bin/env Node

var generator = require("./generate");

var options={};
options.appDirectory=process.cwd();
options.isTS=true;
options.generator = process.argv[2];
options.name = process.argv[3];


if(!options.page && !options.name){
    console.log(options.appDirectory+"/./index.js [generator] [name]");
}else{
    if(options.generator == 'page'||options.generator == 'tabs'){
        try {
            generator.generate(options);
            options.generator = 'service';
            generator.generate(options);
        } catch (e) {
            console.log(e);
        }
    }else{
        generator.generate(options);
    }
}