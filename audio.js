// var a = document.getElementById("myaudio");

// function play ()
// {
//     a.play();
// }

// function puse ()
// {
//     a.pause();
// }

// function stop ()
// {
//     a.pause();
//     a.load();
// }

// function volum ()
// {
//     a.volume = 0.5;
// }

// function mute ()
// {
//     a.muted = true;
// }

var songs = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

var artists = ['ADELE','ENRIQUE','KATY','RIHANA'];

var titles = ['SOME ONE LIKE YOU','I LIKE IT ','FIREWORKS','WE FOUND LOVE'];

var posters = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg'];

var songtitle = document.querySelector('.title');
var artist = document.querySelector('.artist');
var fillbar = document.querySelector('#fill');
var handel = document.querySelector('#handel');

var currenttime = document.getElementById('durationtime');

var vol = document.getElementById('volume');



var song = new Audio();
var currentsong = 0;

window.onload = playSong;

function playSong()
{
    song.src = songs[currentsong]; //set src of songs

    artist.textContent = artists[currentsong]; //set title of songs

    songtitle.textContent = titles[currentsong]; //set title of songs

    //song.play(); 

}

function play ()
{
    song.play();
}

function puse ()
{
    song.pause();
}

function stop ()
{
    song.pause();
    song.load();
    song.play();
}


function volummuted ()
{
     vol.value=0;
}

function mute ()
{
    song.muted = true;
    volummuted();
}

song.addEventListener('timeupdate' , function()
{
    var position = song.currentTime / song.duration;
    fillbar.style.width = position * 100 + '%'; 
    convertTime (Math.round(song.currentTime));


   
});

function convertTime(seconds)
{
    var min = Math.floor(seconds/60);
    var sec = seconds%60;

 min = (min < 10) ? "0" + min : min ;
 sec = (sec < 10) ? "0" + sec : sec;
 currenttime.textContent = min + " : " + sec;

 totaltime = (Math.round(song.duration));
}


function next()
{
    currentsong++;
   if(currentsong > 3)
   {
    currentsong=0;
   }
   
   playSong();
   song.play(); 
   $('#audio-img img').attr('src', posters[currentsong]);

}

function prev()
{
    currentsong--;
    if(currentsong < 0)
    {
     currentsong=3;
    }
    
    playSong();
    song.play(); 
    $('#audio-img img').attr('src', posters[currentsong]);
 
}

function setvolume ()
{
     song.volume = vol.value/10;
}


function song1() 
{
    song.src = songs[0]; //set src of songs

    artist.textContent = artists[0]; //set title of songs

    songtitle.textContent = titles[0]; //set title of songs

    $('#audio-img img').attr('src', posters[0]);

    song.play();
 
}

function song2() 
{
    song.src = songs[1]; //set src of songs

    artist.textContent = artists[1]; //set title of songs

    songtitle.textContent = titles[1]; //set title of songs

    $('#audio-img img').attr('src', posters[1]);

    song.play();
 
}

function song3() 
{
    song.src = songs[2]; //set src of songs

    artist.textContent = artists[2]; //set title of songs

    songtitle.textContent = titles[2]; //set title of songs

    $('#audio-img img').attr('src', posters[2]);

    song.play();
 
}


function song4() 
{
    song.src = songs[3]; //set src of songs

    artist.textContent = artists[3]; //set title of songs

    songtitle.textContent = titles[3]; //set title of songs

    $('#audio-img img').attr('src', posters[3]);

    song.play();
 
}