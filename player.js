$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'https://stream.zeno.fm/ns1rsez0pnhvv';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://stream.zeno.fm/ns1rsez0pnhvv'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('class') == 'fa fa-stop fa-lg beat')
            $('#playback').attr('class', 'fa fa-play fa-lg');
        else
            $('#playback').attr('class', 'fa fa-stop fa-lg beat');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://stream.zeno.fm/ns1rsez0pnhvv');
        song.currentTime = 0;
        $('#playback').attr('class', 'fa fa-play fa-lg');
    });

    

    



    
});





let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "Radi DJ",
      artist: "Simulation Zone",
      album: "Simulation Zone",
      artwork: [{src: "https://zeno.fm/_next/image/?url=https%3A%2F%2Fimages.zeno.fm%2F9o-aB4M1Ktq9mkTfUNt6BhnhqLeMrQnP_OCJETWbhkY%2Frs%3Afit%3A240%3A240%2Fg%3Ace%3A0%3A0%2FaHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlNZ3NTQ2tGMWRHaERiR2xsYm5RWWdJQ1F1Y1drNEFnTUN4SU9VM1JoZEdsdmJsQnliMlpwYkdVWWdJQ0kyY0g1bHdrTW9nRUVlbVZ1YncvaW1hZ2UvP3Jlc2l6ZT0yNDB4MjQwJnVwZGF0ZWQ9MTY1MDQxMzM5NDAwMA.webp&w=3840&q=75"}]

    });}

