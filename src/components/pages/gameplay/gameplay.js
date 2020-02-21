import React, { useState, useEffect } from "react";
import Classement from "../../classement/Classement";
import GameplayHistory from "../../gameplay/GameplayHistory";
import { useTranslation } from "react-i18next";
import GameSearch from "../../../service/GameSearch.js";
import YtPlayer from "../../common/ytplayer.js";

// voir https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks


const Gameplay = props => {
  const [musique, setMusique] = useState([
    {
        id: 1,
        url: "https://www.youtube.com/watch?v=y6120QOlsfU",
        title: "Sandstorm",
        singer: "Darude",
        bSinger: true,
        bTitle: true
    },
    {
        id: 2,
        url: "https://www.youtube.com/watch?v=zA52uNzx7Y4",
        title: "Blue",
        singer: "Eiffel 65",
        bSinger: true,
        bTitle: true
    },
    {
        id: 3,
        url: "https://www.youtube.com/watch?v=SYnVYJDxu2Q",
        title: "Rasputin",
        singer: "Boney M.",
        bSinger: true,
        bTitle: true
    },
    {
        id: 4,
        url: "https://www.youtube.com/watch?v=Nnu1E5Kslig",
        title: "Stairway To Heaven",
        singer: "Led Zeppelin",
        bSinger: true,
        bTitle: true
    }
  ]);

  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [init, setInit] = useState(true);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [classementPlaylist, setClassementPlaylist] = useState([]);

  useEffect(() => {

    let interval = null;

    if(init){

      if ( window.confirm( "Commencer la partie" ) ) {
        setInit(false)
        setIsActive(!isActive);
        // TODO lancer le player et le timer
      } else {
        window.location.reload();
      }
    }

    if (isActive) {
      if(seconds != 0){
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      }else{
        console.log("stop")
        setSeconds(setSeconds => 30);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [isActive, seconds]);


  const handleSubmit = (event) => {
    // TODO lancer le levenshtein
    console.log({valueInput})
    event.preventDefault();

  }

  
  const addGameToHistory = musique => {
    setGameHistory(...gameHistory, musique);
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

  return (
    <div className="app">
      <div>
        <YtPlayer musique={musique}/>
      </div>
      <div className="time">
        {seconds}s
      </div>
      <br/>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={valueInput}
            onChange={e => setValueInput(e.target.value)}
          />
          <input type="submit" value="Envoyer" /> 
        </form>
      </div>
      <div className="flex pl-16">
        <div className="flex-grow-0 px-2">
            <Classement
                title={t("gameplay.classement.playlist")}
                classementItems={classementPlaylist}
                t={t}
            />
        </div>

        <div className="flex-grow pl-2">
            <GameplayHistory
                gameHistory={gameHistory}
                t={t}
                score={score}
            />
        </div>
      </div>
    </div>
  );
};


export default Gameplay
