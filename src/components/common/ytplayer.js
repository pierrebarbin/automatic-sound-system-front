import React, {useState} from 'react';
import YouTube from 'react-youtube';
import soundfile from '../../assets/sounds/blindtest.mp3'

const Ytplayer = props => {

    const [url, SetUrl] = useState("dQw4w9WgXcQ");

    var Player = {};

    const SetPlayer = (event) => {
        // access to player in all event handlers via event.target
        Player = event.target;
        document.getElementById("audio").play();     
        
        if ('mediaSession' in navigator){
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: "Hep hep tu fais quoi la ?",
                artist: "Pas de triche !",
            });
        }
    };

    const PauseVideo = () => {
        Player.pauseVideo();
        document.getElementById("audio").pause();
    }

    const PlayVideo = () => {
        Player.playVideo();
        document.getElementById("audio").play();
    }

    const opts = {
        height: '0',
        width: '0',
        playerVars: {       // https://developers.google.com/youtube/player_parameters
            autoplay: 1,    // lécture automatique
            controls:0,     // désactive les contrôles au clavier
            rel:0,          // pas de proposition de vidéo a la fin de lecture
            fs:0,           // pas de fullscreen
            start:20,       // débute la vidéo a 20sec
            end:40          // durée de 30 sec ( 20 + 30 )
        }
    };
   
    return (
        <div>
            <YouTube
                videoId={url}
                opts={opts}
                onReady={SetPlayer}
            /> 
            <audio id="audio" autoPlay={true} loop={true} src={soundfile}></audio>
        </div>
    );
}

export default Ytplayer;
