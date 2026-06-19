
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

    musicBox.forEach((element,index) => {
        element.addEventListener("click",()=>{
            // console.log(element.innerHTML)
            console.log(element.textContent)
            console.log(index)
            let song = element.querySelector(".songName")
            let singer = element.querySelector(".singerName")
            let writer = element.querySelector(".writerName")
            let picture = element.querySelector(".songImg")
            console.log(picture)

// for musics changer
    function audio(){

            console.log(index)
            let play = document.getElementById("play")
            let pause = document.getElementById("pouse")
            pause.style.display = "none";
            play.style.display = "block"
            let music = element.querySelector(".music");

        play.addEventListener("click",()=>{
                console.log("song.play")
                play.style.display = "none"
                pause.style.display = "block"

            if (music.paused) {
                document.querySelectorAll(".music").forEach(song => {
                    song.pause();
                    song.currentTime = 0 ;
                });
                    music.play();
            }
            })

        pause.addEventListener("click",()=>{
                console.log("song.pause")
                pause.style.display = "none"
                play.style.display = "block"

            if (music.played) {
                document.querySelectorAll(".music").forEach(song => {
                    song.pause();
                    song.currentTime = 0 ;
                });
                    music.pause();
            }
        })
    }audio()

// for image changer
            function imgChanger(){
                let plcImg = document.querySelector(".plcImg")
                let imgUrl = picture.style.backgroundImage
                console.log(imgUrl)
                plcImg.style.backgroundImage = imgUrl 
            }imgChanger();
// music player(main)img changer 
        function mainPic(){
                let plcB = document.querySelector(".plcButton")
            plcB.addEventListener("click",()=>{
                let plbImg = document.querySelector(".pl-box-img")
                let imgUrl = picture.style.backgroundImage
                console.log(imgUrl)
                plbImg.style.backgroundImage = imgUrl 
            })
        }mainPic()
            
            plcsong.textContent = song.textContent
            plcSinger.textContent = singer.textContent
            plcWriter.textContent = writer.textContent
            //page toggling
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

// mainPlayer
function musicP(){
let plcB = document.querySelector(".plcButton")
let plyrCmain = document.querySelector(".playerContainerMain")
let plyCmain2 = document.querySelector(".mainPlayer")
plyCmain2.style.display = "none"
    plcB.addEventListener("click",()=>{
        plyrCmain.style.display = "none"
        plyCmain2.style.display = "block"            
    }) 

// backButton in player box
    let plyrBackB2 = document.querySelector(".plyrBackB2")
    plyrBackB2.addEventListener("click",()=>{ 
        plyrCmain.style.display="block"
        plyCmain2.style.display ="none"
    })
}musicP()
