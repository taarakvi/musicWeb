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
    let musicBox = document.querySelectorAll(".musicBox")
    let plyrCmain = document.querySelector(".playerContainerMain")
    let section1 = document.querySelector("section1")
    let plcsong = document.querySelector(".plcsong")
    let plcSinger = document.querySelector(".plcSinger")
    let plcWriter = document.querySelector(".plcWriter")
    let pic = document.querySelectorAll(".songImg")
    musicBox.forEach(element =>{
        element.addEventListener("click",()=>{
            // console.log(element.innerHTML)
            console.log(element.textContent)
            let song = element.querySelector(".songName")
            let singer = element.querySelector(".singerName")
            let writer = element.querySelector(".writerName")
            // for image changer
            let plcImg = document.querySelector(".plcImg")
            pic.forEach(element =>{
                element.addEventListener("click",()=>{
                let imgUrl = element.style.backgroundImage
                console.log(imgUrl)
                plcImg.style.backgroundImage = imgUrl 
                })
            })


            plcsong.textContent = song.textContent
            plcSinger.textContent = singer.textContent
            plcWriter.textContent = writer.textContent
            // toggling
            plyrCmain.style.display="block"
            section1.style.display="none"
        })
    })
    // backButton in player box
    let plyrBackB = document.querySelector(".plyrBackB")
    plyrBackB.addEventListener("click",()=>{
        plyrCmain.style.display="none"
        section1.style.display="block"
    })
 }cardSect()
history.scrollRestoration = "manual";
window.onload = () => window.scrollTo(0,0);
