///////==== nav ====////
const nav = document.querySelector(".nav");
const music_list = document.querySelector('.music_list')
nav.addEventListener("click", () => {{
    nav.classList.toggle('active');
    music_list.classList.toggle("active");
}})

////////=== Sound ====/////
const soundIcon = document.querySelector('.icon');
const sound = document.querySelector('.sound');
soundIcon.addEventListener('click',  () => {
    sound.classList.toggle('active');
})

///////==== audio ====////
const audio = document.querySelector('.audio');
const play = document.querySelector('.play');
const icon = document.querySelector('.icons');
const end = document.querySelector('.end');
const current = document.querySelector('.start');
const volume = document.querySelector('#volume');
const progressBer = document.querySelector('.style');
const progress = document.querySelector('.progress input');

//////playPause/////

let isPlay = false;
const playPause = () =>{
    if(isPlay){
        audio.pause();
        isPlay = false;
        play.classList.remove('active');
        icon.innerHTML = `<i class="fa-solid fa-play"></i
        >`
    }else{
        audio.play();
        isPlay = true;
        play.classList.add('active');
        icon.innerHTML = ` <i class="fa-solid fa-pause"></i>`
    }

}
play.addEventListener("click" ,  playPause);

//////Music duration ///////
const formatter = (time) =>{
    return Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
}
const duration =() => {
   end.innerHTML = formatter(audio.duration);
   current.innerHTML = formatter(audio.currentTime);
   progress.setAttribute('max', audio.duration);

}

audio.addEventListener('loadedmetadata', duration)
////// progress bar update //////
const updateProgressBar = () => {
    progressBer.style.left = `${(audio.currentTime / audio.duration) * 100}%
    `
}
////// update current time=====///
audio.addEventListener('timeupdate' , () => {
    current.innerHTML = formatter(audio.currentTime);
    updateProgressBar()
})

////// volumeUpdate /////

volume.addEventListener('change', (e) => {
    audio.volume = e.target.value / 100;
})

////////Seek music /////////

progress.addEventListener('change', (e) => {
    audio.currentTime = e.target.value;
})