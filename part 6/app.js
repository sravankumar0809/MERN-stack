// function dice(){
//     let value=Math.floor(Math.random()*6)+1;
//     console.log(value);
// }


// dice();
// function nameprint(value="kumar"){
//     console.log(`hello ${value}! How are you`);
    
// }
// nameprint("sravan")

// function table(n){
//     for(let i=1;i<=10;i++){
//         console.log(`${n}*${i}=${n*i}`);
//         return;
//     }
// }
// function stringattach(arr){
//     let str="";
//     for(ele of arr){
//         str+=ele;
//     }
//     console.log(str);
    
// }
// let arr=['sravan ','kumar ','pentamshetty'];
// stringattach(arr);
// function outer(){
   
//     function inner() {
//         console.log(x);
        
//     }

//     let x=2;
//     inner();
// }


//factory function


// function oddEvenCheck(request){
//     if(request.toLowerCase()=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request.toLowerCase()=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
// }
// let request="odd";
// let func = oddEvenCheck(request);


//uniquecharacteres check

function uniquecharacteres(str){
let i=0;
let ans="";
while (i<str.length){
    
    if(ans.indexOf(str[i])==-1){
        ans+=str[i];
    }
    i++;
}
return ans;
}
let str="abcdefaaabbbjjj";
console.log(uniquecharacteres(str));