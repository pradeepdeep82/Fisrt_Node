const fs= require('fs'); // file system
const [ , ,userInput, secondName]=process.argv;

// . is for current folder
//  utf-8 is the encoding 
// below we using callback function
// fs.readFile("./msg.txt", "utf-8", (err, data)=>{
//   if(err){
//     console.log("error");
//   }
//   console.log(data+" "+name+" "+secondName);
// });



// const msg="This is a good weather"
// const data = name;

// fs.writeFile("goodNames.txt", "name", (err)=>{
//   console.log("Completed writing!! ");
// });





// fs.appendFile("goodNames.txt", name + "\n",()=>{
//   console.log("Completed appending!! ")
// } )



// fs.readFile("./names.txt",)




// fs.unlink("./goodNames.txt", function(err) {
//   console.log("Removed successfully!!..");
// })



// Read -> Replace -> write

// fs.readFile("./goodNames.txt", "utf-8", (err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
//   const replacedData=data.replace(/pradeep/g, "pradeepDeep");
//   console.log(replacedData);
//   fs.writeFile("goodNames.txt", replacedData,(err)=>{
//     console.log("completed replacing");
//   });
// })



// bulk update
// fs.readdir("./nice", function(err, files){
//   console.log(files);
//   funFile=[];
//   files.forEach((data)=>{
//  if (data.startsWith("fun")){
//    funFile.push(data);
//  }
// })
//   console.log(funFile);
//   funFile.forEach( (data)=>  fs.unlink("./nice/"+data, (err)=>{
//       console.log("bulk removal done");
//   }))
  
// })


// create 10 file in backup folder
const quote="The road to success is always under construction";
for(i=1;i<= +userInput;i++){
  fs.writeFile(`./backups/test-${i}.html`, quote,()=>{
    console.log("testfile created");
  })
}

// delete 10 file in backup folder
// const quote="The road to success is always under construction";
// for(i=1;i<= +userInput;i++){
//   fs.unlink(`./backups/test-${i}.html`,()=>{
//     console.log("testfile deleted");
//   })
// }