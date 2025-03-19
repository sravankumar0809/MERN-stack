// let inp=document.querySelector("input");

// inp.addEventListener("change",function(){
//     let li=document.createElement("li");
//     li.innerText=inp.value;
//     document.querySelector("#list").appendChild(li);
   
                                                                 
// });    
// let dl=document.querySelector("#delete");
// dl.addEventListener("click",function(){
//     li.remove();
// });

//delete function doesnot work because event listener is added only for the existing elements but not for the newly created elements
//but when we write the code in the same block where the elements are created then the above code works because it can access the created element


// let btn=document.querySelector(".add");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// btn.addEventListener("click",function(){
//     let li=document.createElement("li");
//     li.innerText=inp.value;
//     inp.value="";
//     let newbtn=document.createElement("button");
//     newbtn.innerText="delete";
//     newbtn.classList.add("delete");
//     li.appendChild(newbtn)
//     ul.appendChild(li);
    
// });
// //event delegation
// ul.addEventListener("click",function (event) {
//     if(event.target.nodeName == "BUTTON"){     //event.target returns which child of the ul was clicked
//         event.target.parentElement.remove();   //event.target.nodeName returns the name of the node which was clicked, if it was a button then we need ot delete the task

//     }
// });

// let del=document.querySelectorAll(".delete");
// for(d of del){
// d.addEventListener("click",function(){
//     let par=this.parentElement;  //using d.parentElement; would not be crct becase d returns last value in the 
//                                  //iteration no matter which button is clicked it deletes only the last one
//                                  //so we use this keyword

//     par.remove();
// });
// }




// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//    let ans = two()+one();
//    console.log(ans);
// }
// three();


// function saveData(data,success,failure){
//     let internet=Math.floor(Math.random()*10)+1;
//     if(internet>4){
//         success(data);
//     }
//     else{
//         failure();
//     }
// }

// saveData("sravan",(data)=>{
//     console.log("data was saved :",data);
//     saveData("apnacollege",(data)=>{//if data is saved then another data is to be stored so another function call is made in the callback
//         console.log("data was saved :",data);
//         saveData("nnrg",(data)=>{
//             console.log("data was saved :",data);
            
//         },()=>{
//             console.log("data was not saved");
            
//         });
//     },()=>{
//         console.log("data was not saved");
        
//     });
    
// },()=>{
//     console.log("data was not saved");
    
// });

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data fetched"), 1000);
//     });
// }

// fetchData()
//     .then((result) => {
//         console.log(result); // Output: Data fetched
//         return "Processing data"; // returned to the next then method
//     })
//     .then((processedData) => {
//         console.log(processedData); // Output: Processing data
//         return "Saving data";
//     })
//     .then((savedData) => {
//         console.log(savedData); // Output: Saving data
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });


// function saveData(data){
//     return new Promise((resolve,reject)=>{
//         let internet=Math.floor(Math.random()*10)+1;
//         if(internet>4){
//             resolve(data);
//         }
//         else{
//             reject(data);
//         }
//     });
// }


// saveData("sravan 1")
//     .then((data)=>{
//         console.log("data was saved",data);
//         return saveData("kumar 2");
//     })
//     .then((data)=>{
//         console.log("data was saved",data);
//         return saveData("srinivas 3");
//     })
//     .then((data)=>{
//         console.log("data was saved",data);
//         return saveData("sandeep 4");
//     })
//     .catch((data)=>{
//         console.log("data was rejected",data);
//     })

let h1=document.querySelector("h1");

function colorChanger(newcolor){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=newcolor;
            resolve(`changed to ${newcolor}`)
        }, 1000);
    })
    
}

async function caller(){
    await colorChanger("blue");
   await colorChanger("red");
colorChanger("green");
}

// colorChanger("blue",1000);
// colorChanger("red",1000);
// colorChanger("green",1000);  // in this case only blue is appeared. so to make tasks execute one after other we use callback hell and promised

// colorChanger("blue",2000)
//     .then((ack)=>{
//         console.log(ack);
//         return colorChanger("red",2000)
//     })
//     .then((ack)=>{
//         console.log(ack);
//         return colorChanger("purple",2000)
//     })
//     .then((ack)=>{
//         console.log(ack);
//     })
//     .catch(()=>{
//         console.log("error");
        
//     })