let music = document.getElementById("music")
let buttun = document.querySelector("button")
    let play = document.getElementById("play")
    let pouse = document.getElementById("pouse")
    pouse.style.display="none"
buttun.addEventListener("click",()=>{
    if(music.paused){
        music.play();
        play.style.display="none"
        pouse.style.display="block"
    }else{
        music.pause();
        play.style.display="block"
        pouse.style.display="none"
    }
})

// heder section
// barIcon toggle
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
    let plyrCmain = document.querySelector(".playerContainerMain")
    let section1 = document.querySelector("section1")
    cards.forEach(element =>{
        // console.log(element.getHTML())
        element.addEventListener("click",()=>{
            plyrCmain.style.display="block"
            section1.style.display="none"
        })
    })
    let plyrBackB = document.querySelector(".plyrBackB")
    plyrBackB.addEventListener("click",()=>{
        plyrCmain.style.display="none"
        section1.style.display="block"
    })
 }cardSect()