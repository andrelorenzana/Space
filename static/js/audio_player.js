function load_audio(image){
    console.log('HERE!')
    var audio_file = image.getAttribute("data-audio");
    var audio_player = document.getElementById('audio_player');

    document.getElementById("audio_player_file").setAttribute("src", audio_file);
    audio_player.load();
    audio_player.play();
}

