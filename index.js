const h4 = document.querySelector(".box3 h4");
const audio = document.querySelector(".box3 audio");
let durationT = document.querySelector(".duration");
// let progress = document.querySelector(".progress"); // Renamed from ".duration"
let box44 = document.querySelector(".box44");
const currentTim = document.getElementById('currentTim');
const durationTim = document.getElementById('durationTim');
const inmgsrc = document.querySelector('.box2  img');
let playbox = document.querySelector('#playbox');
let musicplacebox = document.getElementById("musicplacebox");
let menubox = document.querySelector(".menubox");
let body = document.querySelector("body");
console.log(body)

console.log(durationT)
// console.log(progress)
const musicbox = [
 {
   songName:"Rosa_Linn_-_SNAP(256k).mp3",
   audio:"Rosa_Linn_-_SNAP_(Lyrics)(256k).mp3",
   photo:"SNAP-English-2022-20220809064139-500x500.jpg",
   color:"linear-gradient(rgb(223,39,153),rgb(109,69,94))",
  }, {
   songName:"y2mate.is - Dream lantern",
   audio:"y2mate.is - Dream lantern-MtLHwqbE1eI-64k-1692596298.mp3",
   photo:"Makoto_Domenico-flickrWEB.jpg",
   color:"linear-gradient(rgb(13,142,125),rgb(43,105,123))",
  },
  {
   songName:"7 Years - Lukas Graham.mp3",
   audio:"7 Years - Lukas Graham  [LyricsVietsub].mp3",
   photo:"lukas-graham-7-years-Mp3-Download.jpg",
   color:"linear-gradient(rgb(82,48,224),rgb(66,65,72))",
  },{
   songName:"Eminem - MockingBird (sped up).mp3",
   audio:"Eminem - MockingBird (sped up).mp3",
   photo:"artworks-SFfVDwHzmF80yHSD-Unc3CQ-t500x500.jpg",
   color:"linear-gradient(rgb(66,200,240),rgb(54,23,170))",
  },
    {
   songName:"PERFECT-_ED_SHEERAN_LYRICS(256k).mp3",
   audio:"PERFECT-_ED_SHEERAN_LYRICS(256k).mp3",
   photo:"Ed_Sheeran_Perfect_Single_cover.jpg",
   color:"linear-gradient(rgb(49,11,214),rgb(141,21,127))",
  },
  {
    songName:"Suzume_No_Tojimari_Original_Sound",
    audio:"Suzume_No_Tojimari_Original_Soundtrack__Suzume___Full__-Lyrics-(256k).mp3"
    ,
    photo:"HD-wallpaper-anime-suzume-no-tojimari.jpg",
    color:"linear-gradient(skyblue,rgb(49,11,214))",
  },
    {
   songName:"ON_AND_ON_-_Ft._DANIEL_LEVI_.mp3",
   audio:"ON_AND_ON_-_Ft._DANIEL_LEVI___JUSTIN_BIEBER___BEST_SONGS_2018___Must_Watch_Songs___CANDYMATE(48k).mp3",
   photo:"1200x1200bb.jpg",
   color:"linear-gradient(rgb(55,55,55),rgb(31,8,221)",
  },
    {
   songName:"justin-bieber-anyone.mp3",
   audio:"justin-bieber-anyone-lyrics-128-ytshorts.savetube.me.mp3",
   photo:"Justin_Bieber_-_Anyone.png",
   color:"linear-gradient(rgb(222,72,21),purple)",
  },
    {
   songName:"TOP G themes song ",
   audio:"TOP G themes song  (Lyrics) Andrew Tate's Theme.mp3",
   photo:"download (1).jpeg",
   color:"linear-gradient(rgb(222,72,21),purple)",
  },
  
  {
   songName:"The perfect girl song",
   audio:"the_perfect_girl_-_sped_up_(getmp3.pro).mp3",
   photo:"1676823063.webp",
   color:"#841ad7",
  },
  {
   songName:"Melanie_Martinez_-_Play_Date.mp3",
   audio:"Melanie_Martinez_-_Play_Date___Lyrics(48k).mp3",
   photo:"Play-Date-English-2020-20200909231604-500x500.jpg",
   color:"#c4ba2e",
  },
  {
   songName:"Night_Changes_-_One_Direction.mp3",
   audio:"Night_Changes_-_One_Direction___Slowed_Reverb___English_Love_Song___YourVibe(48k).mp3",
   photo:"ab67616d0000b273d304ba2d71de306812eebaf4.jpeg",
   color:"#b92c67",
  },

  {
   songName:"The_Kid_LAROI J_B.mp3",
   audio:"The_Kid_LAROI,_Justin_Bieber_-_STAY_(Official_Video)(48k).mp3",
    photo:"artworks-rReznawIzS6AxC7Q-C81zrQ-t500x500.jpg",
    color:"#35aaf1",
  },

];
 setTimeout(function() {
   alert("🤖Please click on text when you in menu/threedot because there was some issues and you can't asses to listen musics.There are many others problems too. actually, I tired to do now so, i fixed it later, please enjoy it.")
 }, 10000);
  
let play = "8374917.png";
let audioIndex = 0;
let playing = false; // Track the playing state
let index = 0;
musicplacebox.innerHTML = musicbox.map((a,b) => {

return `<div class="musicbox">
    <img height="100%" width="15%" src="${a.photo}">
    <b id="name">${a.songName}</b></div>`

 }).join("")
// Function to format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Function to update UI
function updateUI() {
  const { currentTime, duration } = audio;
  if (duration) {
    const progressWidth = (currentTime / duration) * 100;
    durationT.style.width = `${progressWidth}%`;
    // progress.style.width = `${currentTime / duration * 100}%`;    
    durationTim.textContent = formatTime(duration);
    currentTim.textContent = formatTime(currentTime);
  }
}

// Play button function
function playBtn(box) {
  playing = !playing;
  if (playing) {
    box.src = "8374917.png";
    playbox.name = "8374917.png";
    h4.innerHTML = `${musicbox[audioIndex].songName}`;
    audio.src = `${musicbox[audioIndex].audio}`;
    
    audio.play();
  } else {
    box.src = "10860787.png";
    playbox.name = "10860787.png";
    audio.pause();
  }
}

// Next button function
function nextBtn(box) {
  audioIndex = (audioIndex + 1) % musicbox.length;
  h4.innerHTML = `${musicbox[audioIndex].songName}`;
  audio.src = `${musicbox[audioIndex].audio}`;
  inmgsrc.src = `${musicbox[audioIndex].photo}`
  body.style.background = `${musicbox[audioIndex].color}`;
 if(playbox.name == "8374917.png"){
  audio.play();
  }
}

// Previous button function
function prevBtn(box) {
  audioIndex = (audioIndex - 1 + musicbox.length) % musicbox.length;
  h4.innerHTML = `${musicbox[audioIndex].songName}`;
  audio.src = `${musicbox[audioIndex].audio}`;
  inmgsrc.src = `${musicbox[audioIndex].photo}`
  body.style.background = `${musicbox[audioIndex].color}`;
if(playbox.name == "8374917.png"){
  audio.play();
  }
}

// Update UI when audio time updates
audio.addEventListener("timeupdate", () => {
  updateUI();
});

// Handle progress bar click
box44.addEventListener("click", (event) => {
  const { duration } = audio;
  const musicVal = (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = musicVal;
  updateUI();
});

// Additional buttons
function closeBtn() {
  window.location.href = "previous_page.html"
 
}
let menuindex = 0;
let musiccheckindex = 0;
function menuBtn(index) {
  menubox.style.display = "flex"
  menuindex++;
  if(menuindex == 2){
    menubox.style.display = "none";
    menuindex = 0;
  }
  index.src = "cross.png";
  musiccheckindex++
  if(musiccheckindex == 2){
  index.src = "Polish_20230711_180614266.png";
  musiccheckindex = 0;
}
}



menubox.addEventListener("click",(e)=> {
let matchtomusic = e.target.innerHTML;
musicbox.map((a,i) => {
if(a.songName.includes(matchtomusic)){
// console.log(i)
// menubox.style.background = "white";
body.style.background = `${musicbox[i].color}`
audioIndex = i;
inmgsrc.src = `${musicbox[i].photo}`
playbox.src = "8374917.png"
    playbox.name = "8374917.png";
    h4.innerHTML = `${matchtomusic}`;
    audio.src = `${musicbox[i].audio}`;
    audio.play();
}
  
})
  
})
