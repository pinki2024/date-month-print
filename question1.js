// const input = require("readline-sync");

// let n = input.questionInt("enter n = ");
// let count1 = 0;
// let i = 2
// while(i<=n){
//     let count = 0;
//     let j=1
//     while(j<=i){
//         if(i%j==0){
//             count+=1;
//             j+=1
//         }
//         else{
//             j+=1;
//         }
//     }
//     if(count==2){
//         count1+=1;
//         i+=1;
//     }
//     else{
//         i+=1;
//     }
// }
// console.log(count1);

//print the date. birth ,year sepratly?
// const input =require("readline-sync");
// let date  =input.questionInt("enter the date =");
// let month =input.question("enter the month name =");
// let year =input.questionInt("enter the year =");
// console.log(date);
// console.log(month);
// console.log(year);


// const input=require("readline-sync");
// let date=input.questionInt("enter date:-");
// let month=input.question("enter month:-");
// let year=input.questionInt("enter year:-");
// console.log(date);
// console.log(month);
// console.log(year);


// function printDate(date,month,year){
    
// }

// let newDate = m (12,12,2002)


const input  =require("readline-sync");

function printDate(date,month,year){
    date = input.questionInt("enter the date:-");
    month =input.question("enter the name of month:-");
    year =input.questionInt("enter year:-");   
   console.log(date);
   console.log(month);
   console.log(year);
}

printDate();