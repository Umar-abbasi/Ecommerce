// Script for navigation bar
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");
if(bar){
    bar.addEventListener("click",()=>{
    nav.classList.add('active');
    })
}

if(close){
    close.addEventListener("click",()=>{
    nav.classList.remove('active');
    })
}

// Sproduct to change products
var mainImg= document.querySelector("#mainimg");
var smallImg=document.querySelectorAll(".small-img");
smallImg[0].onclick = ()=>{
    mainImg.src=smallImg[0].src;
}
smallImg[1].onclick = ()=>{
    mainImg.src=smallImg[1].src;
}
smallImg[2].onclick = ()=>{
    mainImg.src=smallImg[2].src;
}
smallImg[3].onclick = ()=>{
    mainImg.src=smallImg[3].src;
}