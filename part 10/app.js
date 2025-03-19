// let btn=document.querySelector("button");
// btn.addEventListener("click",colorGenerator);
// function colorGenerator(){
//     let red=Math.floor(Math.random()*256);
//     let blue=Math.floor(Math.random()*256);
//     let green=Math.floor(Math.random()*256);
  
    
//     let div=document.querySelector("div");
//     div.style.backgroundColor=`rgb(${red},${green},${blue})`;
//     let h3=document.querySelector("h3");
//     h3.innerHTML=`rgb(${red},${green},${blue})`;
// }



let inp=document.querySelector("input");
let head=document.querySelector("h2");

inp.addEventListener("input",function(){
    
    head.innerText=inp.value.replace(/[^a-zA-Z ]/g,'x');
//     Regular Expression (/[^a-zA-Z ]/g)

// /.../ → This defines a regular expression.
// [^a-zA-Z ] → This negates (^) and matches any character except:
// a-z → Lowercase letters
// A-Z → Uppercase letters
// ' ' → A space
// /g (global flag) → Ensures that all matching characters are replaced, not just the first occurrence.

});
