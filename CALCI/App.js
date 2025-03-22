
let screen = document.querySelector(".result");
let nums=document.querySelectorAll(".numbers");
let operators=document.querySelectorAll(".operators");
let ans=document.querySelector(".compute");
for(op of operators){
    op.addEventListener("click",numberClick);
}
for(num of nums){
    num.addEventListener("click",numberClick);
}

function numberClick(){
    let val=this.innerText;
    screen.append(val);
}
ans.addEventListener("click",()=>{
    let value=screen.innerText;
    let ans=eval(value);
    screen.innerText=ans;
});