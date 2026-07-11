
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
    let timer;
    musicBox.forEach((element,index) => {
        element.addEventListener("click",()=>{
            let song = element.querySelector(".songName")
            let singer = element.querySelector(".singerName")
            let writer = element.querySelector(".writerName")
            let picture = element.querySelector(".songImg")
            clearInterval(timer);
// for musics changer
    function audio(){
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
              

            if (music.paused){
                document.querySelectorAll(".music").forEach(song => {
                    song.pause();
                    song.currentTime = 0 ;
                    console.log(Math.floor(music.duration))
                    // lastTime
                    let minut = Math.floor(music.duration/60)
                    let second = Math.floor(music.duration%60)
                    lastTime.textContent = (`${minut}:${second}`)
                    clearInterval(timer);
                });
                    music.play();
                    // previus time
                    let preTime = document.querySelector(".preTime")
                    // song.currentTime = 0;
                    if(music.played){
                            let num = 1;
                            let preMinut=0;
                            let preSecond=1;
                            let xt = 1;

                    function timing(){
                            clearInterval(timer);
                          timer = setInterval(()=>{
                            // console.log(num)
                            preTime.textContent = (`${preMinut}:${preSecond}`);
                            if(xt === 60){
                                console.log("60 = 1")
                                preMinut++;
                                preSecond = 0;
                                xt = 1
                            }preSecond++
                            // console.log(music.duration)
                        if(num === Math.floor(music.duration)){
                            clearInterval(timer);
                            pause.style.display = "none";
                            play.style.display = "block"
                        } num++;
                          xt++;
                       },1000);  
                    }timing()
                        
                    }
            }
            else{
                if(music.played){
                   document.querySelectorAll(".music").forEach(song => {
                    song.pause();
                    song.currentTime = 0 ;
                    console.log("during the playing")
                    clearInterval(timer);
                    });
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
                    song.currentTime = 0;
                    clearInterval(timer);
                    console.log("pause")
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
// REPEATAION AND HEART
            let heart1 = document.getElementById("fa-heart1")
            let heart2 = document.getElementById("fa-heart2")
            let repeat1 = document.getElementById("fa-repeat1")
            let repeat2 = document.getElementById("fa-repeat2")
            heart2.style.display="none"
            repeat2.style.display="none"
            heart1.addEventListener("click",()=>{
                heart2.style.display="block"
                heart1.style.display="none"
            })
            heart2.addEventListener("click",()=>{
                heart1.style.display="block"
                heart2.style.display="none"
            })
            repeat1.addEventListener("click",()=>{
                repeat2.style.display="block"
                repeat1.style.display="none"
            })
            repeat2.addEventListener("click",()=>{
                repeat1.style.display="block"
                repeat2.style.display="none"
            })

            }musicP()
        
    