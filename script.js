
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
            // console.log(element.textContent)
            // console.log(index)
            let song = element.querySelector(".songName")
            let singer = element.querySelector(".singerName")
            let writer = element.querySelector(".writerName")
            let picture = element.querySelector(".songImg")
            // console.log(writer)

// for musics changer
    function audio(){

            // console.log(index)
            let play = document.getElementById("play")
            let pause = document.getElementById("pouse")
            pause.style.display = "none";
            play.style.display = "block"
            let music = element.querySelector(".music");

        play.addEventListener("click",()=>{
                console.log("song.play")
                play.style.display = "none"
                pause.style.display = "block"
                let lastTime = document.querySelector(".lastTime")
                // console.log(lastTime)

            if (music.paused) {
                document.querySelectorAll(".music").forEach(song => {
                    song.pause();
                    song.currentTime = 0 ;
                    console.log(music.duration)
                    // lastTime
                    let minut = Math.floor(music.duration/60)
                    let second = Math.floor(music.duration%60)
                    lastTime.textContent = (`${minut}:${second}`)
                });
                    music.play();
                    // previus time
                    let preTime = document.querySelector(".preTime")
                    if(music.played){
                       let num = 1;
                       let preMinut=0;
                       let preSecond=0;
                       let timer = setInterval(()=>{
                        console.log(num)
                        preTime.textContent = num;
                        if(num === music.duration){
                            clearInterval(timer);
                        } num++;
                       },1000);
                    
                    }

            }
            })

        pause.addEventListener("click",()=>{
                console.log("song.pause")
                pause.style.display = "none"
                play.style.display = "block"

            if (music.played) {
                document.querySelectorAll(".music").forEach(song => {
                    song.pause();
                    // song.currentTime = 0 ;
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

// img changer in music player
        function mainPic(){
                let plcB = document.querySelector(".plcButton")
            plcB.addEventListener("click",()=>{
                let plbImg = document.querySelector(".pl-box-img")
                let imgUrl = picture.style.backgroundImage
                // console.log(imgUrl)
                plbImg.style.backgroundImage = imgUrl 
            })
        }mainPic()
// details changer
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
                    // Time
                    let lastTime = document.querySelector(".lastTime")
                    let preTime = document.querySelector(".preTime")
                    preTime.textContent = (`0:0`)
                    lastTime.textContent = (`0:0`)
                }) 

// backButton in player box
            let plyrBackB2 = document.querySelector(".plyrBackB2")
            plyrBackB2.addEventListener("click",()=>{ 
                plyrCmain.style.display="block"
                plyCmain2.style.display ="none"
            })
            }musicP()
