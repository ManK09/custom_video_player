console.log("hello");
const player=document.querySelector('.player')
const video = player.querySelector('.viewer')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip')
const ranges = player.querySelectorAll('.player__slider') 
const progressBar= player.querySelector('.progress__filled');
const progress=player.querySelector('.progress');


function togglePlay(){
    const method = video.paused ? 'play':'pause';
    video[method]();

}
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function skip(){
    //console.log(this.dataset.skip);
    video.currentTime+=parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    //console.log("hii");
    //console.log(this.name);
    video[this.name]=this.value;
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX /  progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;  
    console.log(e);
}

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

//console.log("hello")

toggle.addEventListener('click',togglePlay);

let mouseDown=false; 
progress.addEventListener('click',scrub); 
progress.addEventListener('mousemove',(e)  => mouseDown && scrub(e));
progress.addEventListener('mousedown',()=> mouseDown=true);
progress.addEventListener('mouseup',()=> mouseDown=false);

skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
//ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));