// document.all[8].innerText="peter parker";


// let atags=document.querySelectorAll(".box a");  //get all the anchor tags that are present in the li tags as a nodelist
// atags.forEach(function (el){                //now atags is a node list ,foreach method iterates for every individual object in it
//     el.style.color="red";                     //for each individual object we are manipulating the text color of the object
//     el.style.display="flex";                     //for each individual object we are manipulating the text color of the object
//     el.style.justifyContent="center";                     //for each individual object we are manipulating the text color of the object
    
// })

let anchor=document.createElement('a');
console.dir(anchor);
anchor.innerText="Home";
document.querySelector("body").append(anchor);
anchor.href="https://wa.me?8978232021";
anchor.classList.add("styler");


let divi=document.createElement('div');
divi.classList.add("box");
document.querySelector("body").append(divi);
let para=document.createElement('p');
para.innerText="hey im in a div";
let h1=document.createElement('h1');
h1.innerText="im also";
divi.append(para);
divi.append(h1);


let para1=document.createElement('p');

console.dir(para1);

para1.innerHTML="apna college <b>Delta</b> practice";
let body=document.querySelector('body');

body.append(para1);
