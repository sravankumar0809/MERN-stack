const figlet=require("figlet");

figlet("Thudumu  mythri ",(err,data)=>{
    if(err){
        console.dir(err);
        return;
    }
    console.log(data);
    
})