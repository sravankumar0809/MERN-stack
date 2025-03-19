// let num=[];
// function check(el){
//     return el*2;
// }
// let double=num.map(check);
// let Every=num.every((el)=>{
//     el%2==0;
// })


let nums=[1,2,3,4,5];
// function check(element){
//     element%10==0
// }
let ans=nums.every((check)=> check%10==0);
let newans= nums.reduce((res,ele)=>Math.min(res,ele));