/*console.log("hey");

const product= {
    title: "parker pen",
    rating: 4.5,
    deal:5,
};
console.log(product);

//array function

function sum(a,b){
return a+b;
}


const arrowSum =(a,b) =>{
    console.log(a+b);
};


function multiplication(a,b){
    return a*b;
}
 
const arrowMul= (a,b) => {
    return a*b;

};*/


   //prac ques takes string as an arg and return number of vowels in the string

   /*function countVowels(str){
    let count=0;
    for(const char of str){
       if (char==="a" || char==="e" || char==="i"
|| char==="o" || char==="i"){
    count++;
}       

    }
    console.log(count);
   }*/

   //prac ques filter out marks

   let marks=[97,64,32,49,99,96,86];

   let newArr = marks.filter((val) => {
    return val>=90;
   });
   console.log(newArr);

   //input array from user

   let n = prompt("enter a number");

   let arr = [];
   for(i=1; 1<=n; i++){
    arr[i-1]= i; //1[0] 2[1]
       }

       const sum = arr.reduce((res,curr) =>{
        return res+curr;
       });

       const factorual= arr.reduce((res,curr) =>{
        return res*curr;
       });
       