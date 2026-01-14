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
