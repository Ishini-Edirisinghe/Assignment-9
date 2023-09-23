let lights = $('.light');
let index=0;
let direction = 'Right';

let key = null;
var audio = new Audio();

audio.src="assets/audio/audio.mp3";
audio.loop=true;

function updateLight(){
    $('.light').css({background:"white"});

    if(index>0){
        lights[index-1].style.background="pink";
    }

    lights[index].style.background="red";

    if(index<6){
        lights[index+1].style.background="pink";
    }

    if(index===6){
        direction="Left";
    }

    if(index===0){
        direction="Right";
    }

    direction==="Right" ? index++ : index--;

}



$('#start').on('click',()=>{
    key=setInterval(updateLight,500);
    audio.play();
});

$('#stop').on('click',()=>{
    clearInterval(key);
    audio.pause();
});
