// const students={
//      sravan:{
//         name: "sravankumar",
//         marks: 23
//     },
//      srinivas:{
//         name: "srinu",
//         marks: 24
//     },
//      manoj:{
//         name: "manu",
//         marks: 24
//     },
//     hello: 67,
// // };


// guessing game
let max=document.getElementById("range").value;
let target=Math.floor(Math.random()*max)+1;
let guess= document.getElementById("num").value;
let count=1;
while(1){
if(guess==target){
    console.log(`guess was correct it was ${target} and number of attempts are ${count}`);
    document.getElementById("output").value="correct";
    break;
}else if(guess<target){
    prompt("guess is less than the target")
    guess= document.getElementById("num").value;
    count++;
}
else{
    prompt("guess is greater than the target")
    guess=documentget.ElementById("num").value;
    count++;
}

}

//array of objects

// const arr=[
//     {name:"sravankumar",
//      age: 21

//     },
//     {name:"srinivas",
//         age:23
//     },
//     {name:"sandeep",
//         age:25
//     }

// ];
// const obj={
// name:"srvan",
// gender:"male"
// };