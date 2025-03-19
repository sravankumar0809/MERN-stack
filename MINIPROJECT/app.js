let gameSeq=[];
let userSeq=[];
let Highscore=0;

classes=["red","green","blue","yellow"];

let level=1;
let started = false;
let btns=document.querySelectorAll(".btn");
let h3=document.querySelector("h3");

let start=document.querySelector(".start")
start.addEventListener("click",function(){
   

    if(started == false){
        started = true;
        level=0;
        game();
    }
    
});


function game(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;
    let index=Math.floor(Math.random()*4);
    randomColor=classes[index];
    randBtn=document.querySelector(`.${randomColor}`);
    flasher(randBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    
    
}

//for blinking functionality of buttons
function flasher(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250)
}
function userflasher(btn){
    btn.classList.add("greenflash");
    setTimeout(()=>{
        btn.classList.remove("greenflash");
    },250)
}
//for clicking functionality of buttons
for(b of btns){
        b.addEventListener("click",buttonPress)
    }
function buttonPress(){
    let btn=this;
    userflasher(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

//matching the sequence
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        
        if(userSeq.length==gameSeq.length){
            setTimeout(game,1000);
        }
    } else{
        Highscore=Math.max(level,Highscore);
        h3.innerHTML=`Game Over! Your score : <b>"${level}"</b> <b>HIGHSCORE : ${Highscore}</b> <br>Press start button to begin again`;
        console.log("gameover");
        
        reset();
    }
}

//setting gameover functionality
function reset(){
    level=0;
    gameSeq=[];
    userSeq=[];
    started=false;
}