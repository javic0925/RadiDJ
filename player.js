$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'http://stream.zeno.fm/hkzfwez0pnhvv';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'http://stream.zeno.fm/hkzfwez0pnhvv'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('class') == 'fa fa-stop fa-lg beat')
            $('#playback').attr('class', 'fa fa-play fa-lg');
        else
            $('#playback').attr('class', 'fa fa-stop fa-lg beat');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'http://stream.zeno.fm/hkzfwez0pnhvv');
        song.currentTime = 0;
        $('#playback').attr('class', 'fa fa-play fa-lg');
    });

    

    



    
});


let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "Radio",
      artist: "Radi DJ",
      album: "Simulation Zone",
      artwork: [{src: "#"}]
    });}