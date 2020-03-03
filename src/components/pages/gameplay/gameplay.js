import React, { useState, useEffect,useRef } from "react";
import SVG from "react-inlinesvg";
import Classement from "../../classement/Classement";
import GameplayHistory from "../../gameplay/GameplayHistory";
import { useTranslation } from "react-i18next";
import GameSearch from "../../../service/GameSearch.js";
import YtPlayer from "../../common/ytplayer.js";
import svgNote from "../../../assets/icons/zondicons/music-notes.svg"; 
import svgArtist from "../../../assets/icons/zondicons/music-artist.svg";

// pour le timer voir https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks


const Gameplay = props => {

    //#region useState
    const [musique, setMusique] = useState([
        {
            id: 1,
            url: "https://www.youtube.com/watch?v=y6120QOlsfU",
            title: "Sandstorm",
            singer: "Darude",
            bSinger: true,
            bTitle: true,
            isWin: 0
        },
        {
            id: 2,
            url: "https://www.youtube.com/watch?v=zA52uNzx7Y4",
            title: "Blue",
            singer: "Eiffel 65",
            bSinger: true,
            bTitle: true,
            isWin:0
        },
        {
            id: 3,
            url: "https://www.youtube.com/watch?v=SYnVYJDxu2Q",
            title: "Rasputin",
            singer: "Boney M.",
            bSinger: true,
            bTitle: true,
            isWin:0
        },
        {
            id: 4,
            url: "https://www.youtube.com/watch?v=Nnu1E5Kslig",
            title: "Stairway To Heaven",
            singer: "Led Zeppelin",
            bSinger: true,
            bTitle: true,
            isWin:0
        },
    ]);
    const { t } = useTranslation();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [valueInput, setValueInput] = useState("");
    const [init, setInit] = useState(true);
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [classementPlaylist, setClassementPlaylist] = useState([]);
    const [waiting,setWaiting] = useState(false);
    const [nbMusique, setNbMusique] = useState(0);
    const [currentMusique,setCurrentMusique]=useState([])
    const [musiqueFind,setMusiqueFind] = useState(false);
    const [singerFind,setSingerFind] = useState(false);
    //#endregion
    const childRef = useRef();

    //#region useEffect
    useEffect(() => {
        
        let interval = null;
        
        if (init) {
                
                let ReadyInterval = window.setInterval(()=>{
                    if(childRef.current.playerIsReady()){
                        window.clearInterval(ReadyInterval);
                        setInit(false)
                        setIsActive(!isActive);
                    }
                },2000)

            getClassement();
        }

        if (isActive) {
            if (seconds != 0) {
                interval = setInterval(() => {
                    setSeconds(seconds => seconds - 1);
                }, 1000);
            } else { 
                if(musique.length){
                    if(waiting){
                        document.getElementById("TitleFind").classList.add("text-yellow-600");
                        document.getElementById("TitleFind").classList.remove("text-green-600");
                        document.getElementById("ArtistFind").classList.add("text-yellow-600");
                        document.getElementById("ArtistFind").classList.remove("text-green-600");

                        document.getElementById("GameSearch").disabled = false;
                        document.getElementById("GameSearch").focus();
                        setMusiqueFind(false);
                        setSingerFind(false);
                        setNbMusique(nbMusique+1);
                        setCurrentMusique(musique[0]);
                        childRef.current.nextVideo();
                        setSeconds(setSeconds => 10);  
                        setWaiting(false);
                    }else{
                        document.getElementById("GameSearch").disabled = true;
                        if (currentMusique.title != undefined){
                            addGameToHistory();
                        }
                        childRef.current.PauseVideo();
                        document.getElementById("")
                        setSeconds(setSeconds => 5);
                        setWaiting(true);
                    }
                }
                else if (seconds == 0){
                    // TODO send score
                    if (currentMusique.title != undefined){
                        addGameToHistory();
                    }
                    childRef.current.PauseVideo();
                }    
            }

        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [isActive, seconds,currentMusique]);
    //#endregion

    const handleSubmit = (event) => {
        
        var result = GameSearch(valueInput,currentMusique.singer,currentMusique.title,currentMusique.bSinger,currentMusique.bTitle);

        switch (result) {
            case 1:
                if (! singerFind ){
                    setSingerFind(true);
                    currentMusique.isWin = currentMusique.isWin + 1;
                    setCurrentMusique(currentMusique);
                    document.getElementById("ArtistFind").classList.remove("text-yellow-600");
                    document.getElementById("ArtistFind").classList.add("text-green-600");
                    if( seconds >= 1 && seconds <= 10 ){
                        setScore(score + 1);
                    }
                    else if( seconds >= 11 && seconds <= 20 ){
                        setScore(score + 2);
                    }
                    else if( seconds >= 21 && seconds <= 30 ){
                        setScore(score + 3);
                    }
                }
            break;
            
            case 2:
                if (! musiqueFind ){
                    setMusiqueFind(true);
                    currentMusique.isWin = currentMusique.isWin + 2;
                    setCurrentMusique(currentMusique);
                    document.getElementById("TitleFind").classList.remove("text-yellow-600");
                    document.getElementById("TitleFind").classList.add("text-green-600");
                    if( seconds >= 1 && seconds <= 10 ){
                        setScore(score + 1);
                    }
                    else if( seconds >= 11 && seconds <= 20 ){
                        setScore(score + 2);
                    }
                    else if( seconds >= 21 && seconds <= 30 ){
                        setScore(score + 3);
                    }
                }
            break;

            case 3:
                if(! singerFind && ! musiqueFind){
                    setMusique(true);
                    setSingerFind(true);
                    currentMusique.isWin = 3;
                    setCurrentMusique(currentMusique);
                    document.getElementById("TitleFind").classList.remove("text-yellow-600");
                    document.getElementById("TitleFind").classList.add("text-green-600");
                    document.getElementById("ArtistFind").classList.remove("text-yellow-600");
                    document.getElementById("ArtistFind").classList.add("text-green-600");
                    if( seconds >= 1 && seconds <= 10 ){
                        setScore(score + 7);
                    }
                    else if( seconds >= 11 && seconds <= 20 ){
                        setScore(score + 8);
                    }
                    else if( seconds >= 21 && seconds <= 30 ){
                        setScore(score + 9);
                    }
                }
                else{
                    if (! musiqueFind ){
                        setMusiqueFind(true);
                        document.getElementById("TitleFind").classList.remove("text-yellow-600");
                        document.getElementById("TitleFind").classList.add("text-green-600");
                        currentMusique.isWin = currentMusique.isWin + 2;
                        setCurrentMusique(currentMusique);
                        if( seconds >= 1 && seconds <= 10 ){
                            setScore(score + 1);
                        }
                        else if( seconds >= 11 && seconds <= 20 ){
                            setScore(score + 2);
                        }
                        else if( seconds >= 21 && seconds <= 30 ){
                            setScore(score + 3);
                        }
                    }

                    if (! singerFind){
                        setSingerFind(true);
                        document.getElementById("ArtistFind").classList.remove("text-yellow-600");
                        document.getElementById("ArtistFind").classList.add("text-green-600");
                        currentMusique.isWin = currentMusique.isWin + 1;
                        setCurrentMusique(currentMusique);
                        if( seconds >= 1 && seconds <= 10 ){
                            setScore(score + 1);
                        }
                        else if( seconds >= 11 && seconds <= 20 ){
                            setScore(score + 2);
                        }
                        else if( seconds >= 21 && seconds <= 30 ){
                            setScore(score + 3);
                        }
                    }
                }
            break;
        }

        setValueInput("");
        event.preventDefault();
    }

    const addGameToHistory = () => {
        setGameHistory([currentMusique,...gameHistory]);
    };

    const getClassement = event => {
        //TODO : Utiliser Axios et taper sur l'api
        setClassementPlaylist([
            {
                id: 1,
                username: "Lewis",
                score: 6
            },
            {
                id: 2,
                username: "Buffy",
                score: 40
            },
            {
                id: 3,
                username: "Sybil",
                score: 49
            },
            {
                id: 4,
                username: "Cara",
                score: 11
            },
            {
                id: 5,
                username: "Kenneth",
                score: 25
            },
            {
                id: 6,
                username: "Amber",
                score: 15
            },
            {
                id: 7,
                username: "Wallace",
                score: 13
            },
            {
                id: 8,
                username: "Amir",
                score: 42
            },
            {
                id: 9,
                username: "Tasha",
                score: 12
            },
            {
                id: 10,
                username: "Karina",
                score: 12
            },
            {
                id: 11,
                username: "Madison",
                score: 8
            },
            {
                id: 12,
                username: "Stone",
                score: 21
            },
            {
                id: 13,
                username: "Vance",
                score: 34
            },
            {
                id: 14,
                username: "Nash",
                score: 3
            },
            {
                id: 15,
                username: "Sydnee",
                score: 28
            }
        ]);
    };

    //#region html
    return (
        <div className="bg-gray-900 p-4">
            <div>
                <YtPlayer musique={musique} ref={childRef}/>
            </div>

            <div className="grid grid-cols-12 gap-2">

                    <div class="col-span-9">
                        <form onSubmit={handleSubmit}>
                            <input
                                id="GameSearch"
                                className="w-full flex-grow bg-gray-800 placeholder-gray-500 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                value={valueInput}
                                autoComplete="off"
                                onChange={e => setValueInput(e.target.value)}
                            />
                        </form>
                    </div>

                    <div className="col-span-3 grid grid-cols-12">
                        <div className="col-span-3">
                            <button id="TitleFind" className="bg-gray-400 rounded text-yellow-600 p-1 cursor-default">
                                <SVG
                                    className="h-10 w-10 fill-current pt-2"
                                    src={svgNote}
                                    title="Titre trouvé"
                                />
                            </button>
                            
                        </div>
                        <div className="col-span-3">
                            <button id="ArtistFind" className="bg-gray-400 rounded text-yellow-600 p-1 cursor-default">
                                <SVG
                                    className="h-10 w-10 fill-current pt-2"
                                    src={svgArtist}
                                    title="Artiste trouvé"
                                />
                            </button>
                            
                        </div>
                        

                        <div className="col-span-6">
                            <div className="time">
                                {waiting?'En attente':"Extrait n° " + nbMusique}
                            </div>
                            <div className="time">
                                {seconds}s
                            </div>
                        </div>

                    </div>

                

                    <div className="col-span-9">
                        <GameplayHistory
                            gameHistory={gameHistory}
                            t={t}
                            score={score}
                        />
                    </div>
                    <div className="col-span-3">
                        <Classement
                            title={t("gameplay.classement.playlist")}
                            classementItems={classementPlaylist}
                            t={t}
                        />
                    </div>
            </div>

            
        </div>
    );
};
//#endregion

export default Gameplay
