allMusic = [
    {
        name: "Harley Bird - Home",
        artist: "Jordan Schor",
        img:"music-1",
        src:"music-1"
    },
    {
        name: "Ikson AnyWhere - Ikson",
        artist: "Audio Library",
        img:"music-2",
        src:"music-2"
    },
    {
        name: "Beauz & Jvna - Crazy",
        artist: "Beauz & Jvna",
        img:"music-3",
        src:"music-3"
    },
    {
        name: "Hardwind - Want Me",
        artist: "Mike Archangelo",
        img:"music-4",
        src:"music-4"
    },
    {
        name: "Jim - Sun Goes Down",
        artist: "Jim Yosef x Roy",
        img:"music-5",
        src:"music-5"
    },
    {
        name: "Lost Sky - Vision NCS",
        artist: "NCS Release",
        img:"music-6",
        src:"music-6"
    }
];

const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
mainAudio = wrapper.querySelector("#main-audio"),
playPauseBtn = wrapper.querySelector(".play-pause");


let musicIndex = 1;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
});

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb-1].name;
    musicArtist.innerText = allMusic[indexNumb-1].artist;
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb-1].src}.mp3`;
}

function playMusic(){
    wrapper.classList.add("paused");
    text = `<i class="fa-solid fa-pause"></i>`;
    playPauseBtn.appendChild(text);
    mainAudio.play();
}

function playMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").className = "play_arrow";
    mainAudio.pause();
}

playPauseBtn.addEventListener("click", ()=>{
    const isMusicPaused = wrapper.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
});