const botaoPlay = document.querySelector('.botaoPlay')

function laodSong() {
    audio.src = `music/${ComingSoon-1}.mp3`
}

function playSong() {
    botao-play.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play() 
}

function pauseSong() {
    playBtn.querySelector('i.fas').classList.add('fa-paly');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause()
}

playBtn.addEventListener('click', () => {
    const isPlaying = botao-play.classList.contains('paly');

    if (isPlaying) {
        pauseSong();
    }   else {
        playSong();  
    }

} )