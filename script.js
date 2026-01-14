let music = document.getElementById("music")
let buttun = document.querySelector("button")
buttun.addEventListener("click",()=>{
    if(music.paused){
        music.play();
        buttun.textContent = "pause"
    }else{
        music.pause();
        buttun.textContent = "play"
    }
})

// heder section
 function barSect(){
    let barOpt = document.querySelector(".barOpt")
    let barIcon = document.querySelector(".barIcon")
    barIcon.addEventListener("click",()=>{
        barOpt.classList.toggle("barOptions")  
        console.log("clicked bar")
    })
   document.querySelector(".Maincontainer").addEventListener("click",()=>{
    barOpt.classList.remove("barOptions") 
   })
 }barSect()

 function cardSect(){
    let cards = document.querySelectorAll(".card")
    cards.forEach(element =>{
        console.log(element.getHTML())
    })
 }cardSect()