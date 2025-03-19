// const sum= a=> (a*a);

//settimeout function
// console.log("before settime out ");

// setTimeout(()=>{console.log("hello");},);
// console.log("after settime out");


//set interval function
// let id=setInterval(func,2000);
// function func(){
//     console.log("hello");               //after every 2 seconds it prints hello
// }
// let n=2;
// let id2= setInterval(()=>{
//     console.log("sravan")},2000
// )


// const student={
//     name:"sravankumar",
//     age:21,
//     scope:this, //here this refers to the global scope, i.e window object
//     getName: function(){
//         console.log(this.name);
//         console.log(this);  //here this refers to the object student
//         age=3;
//         myage = ()=>{
//             console.log(this.age);
//         }
        
//     },
//     getAge:()=>{
//         console.log(this.age);
//         console.log(this)
//     },
//     strttimer:function() {setTimeout(()=>{console.log(this.name);},2000);}

// };
// n=2;
// const sum=(n)=>n*n;

// let id=setInterval(()=>{
//     console.log("hello");
// },2000);
// setTimeout(() => {
//     clearInterval(id)
// }, 10000);
// let arrayaverage=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     console.log(`sum is ${sum} and average is ${sum/arr.length}`);
// }
// arr=[1,2,3,4,5];


const student ={
    name:"sravankumar",
    marks:24,
    getMarks:function(){
        console.log(this);
        console.log(this.name);
        Name="srinivas";
        let newname=()=>{
            console.log(this);
        }
        newname();
    }
}