import React, {useState} from 'react';
import YouTube from 'react-youtube';
import soundfile from '../../assets/sounds/blindtest.mp3'

const Ytplayer = props => {

    const [url, SetUrl] = useState(props.musique);

    // const [url, setUrl] = useState([
    //     {id:"GUenj-OKjWE"},
    //     {id:"LZAFo4jXhW0"},
    //     {id:"dQw4w9WgXcQ"},
    //     {id:"dv13gl0a-FA"},
    //     {id:"pVHKp6ffURY"},
    //     {id:"rY-FJvRqK0E"}]);

    const config = { attributes: true, childList: true, subtree: true };

    var Player = {};

    const Rehide = (mutationsList, observer) => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                observer.disconnect();
                Player.setSize(0,0);
                observer.observe( document.getElementById('player') , config);
            }
        }
    }

    const SetPlayer = (event) => {
        // access to player in all event handlers via event.target
        Player = event.target;
        // document.getElementById("audio").play();     
       
        nextVideo(); // démarre la première vidéo

        if ('mediaSession' in navigator){ // anti-triche overlay audio win10
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: "Hep hep tu fais quoi la ?",
                artist: "Pas de triche !",
            });
        }

        // observe les modif du dom sur le player pour empêcher le resize
        const observer = new window.MutationObserver(Rehide);
        observer.observe( document.getElementById('player') , config);
   
    };

    const PauseVideo = () => {
        Player.pauseVideo();
        // document.getElementById("audio").pause();
    }

    const PlayVideo = () => {
        Player.playVideo();
        // document.getElementById("audio").play();
    }

    const nextVideo = () => {
        if ( url.length ){
            let thisID = url.shift().url;
            thisID = thisID.match(/v=[^&]+/gm)[0].replace("v=","");

            Player.loadVideoById({
                videoId:thisID,
                startSeconds:20,
                endSeconds:40
            });
        }
    }

    const ClearCue = () => { // vide les vidéos en attente
        SetUrl(url.length = 0);
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
                id="player"
                // videoId={url}
                opts={opts}
                onReady={SetPlayer}
                onResize={Rehide}
            /> 
            <audio id="audio" controls={true} autoPlay={true} loop={true} src={soundfile} className="w-0"></audio>
        </div>
    );
}

export default Ytplayer;
