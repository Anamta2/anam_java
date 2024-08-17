/*let btn1 = document.querySelector("#btn1");

btn1.onclick = ()=>{
    console.log("btn was clicked");

}*/


//tpggle button to change to dark and light mode

 let modeBtn= document.querySelector("#btn1")
let currMode= "light";

 modeBtn.addEventListener("click",() =>{
    if (currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
 });