import React, {useState,forwardRef,useImperativeHandle} from 'react';
import YouTube from 'react-youtube';
import soundfile from '../../assets/sounds/blindtest.mp3'

const Ytplayer = forwardRef((props, ref) => {
    const [url, SetUrl] = useState(props.musique);

    const [Player,setYtPlayer] = useState(undefined);

    const config = { attributes: true, childList: true, subtree: true };

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
        setYtPlayer(event.target);    

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

    useImperativeHandle(ref, () => ({

        playerIsReady: ()=>{
            if(Player === undefined){
                return false;  
            }
            else{
                return true;
            }
        },
        PauseVideo: () => {
            Player.pauseVideo();
        },
        PlayVideo: () => {
            if (Player !== undefined){
                Player.playVideo();
                return true;
            }
            else{
                return false;
            }
        },
        prepareNextVideo: () => {
            if ( url.length ){
                let thisID = url.shift().url;
                thisID = thisID.match(/v=[^&]+/gm)[0].replace("v=","");

                Player.cueVideoById({
                    videoId:thisID,
                    startSeconds:20,
                    endSeconds:50,
                    suggestedQuality:"small"
                });
            }
        },
        nextVideo: () => {
            if ( url.length ){
                let thisID = url.shift().url;
                thisID = thisID.match(/v=[^&]+/gm)[0].replace("v=","");

                Player.loadVideoById({
                    videoId:thisID,
                    startSeconds:20,
                    endSeconds:50,
                    suggestedQuality:"small"
                });
            }
        },

        ClearCue: () => { // vide les vidéos en attente
            SetUrl(url.length = 0);
        }
    }));

    const opts = {
        height: '0',
        width: '0',
        playerVars: {       // https://developers.google.com/youtube/player_parameters
            autoplay: 1,    // lécture automatique
            controls:0,     // désactive les contrôles au clavier
            rel:0,          // pas de proposition de vidéo a la fin de lecture
            fs:0,           // pas de fullscreen
            start:20,       // débute la vidéo a 20sec
            end:50          // durée de 30 sec ( 20 + 30 )
        }
    };
   
    return (
        <div>
            <YouTube
                id="player"
                opts={opts}
                onReady={SetPlayer}
                onResize={Rehide}
            /> 
            <audio id="audio" controls={true} autoPlay={true} loop={true} src={soundfile} className="w-0"></audio>
        </div>
    );
})

export default Ytplayer;
