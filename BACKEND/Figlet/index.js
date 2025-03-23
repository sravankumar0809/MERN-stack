const figlet=require("figlet");

figlet("Hello world ",(err,data)=>{
    if(err){
        console.dir(err);
        return;
    }
    console.log(data);
    
})