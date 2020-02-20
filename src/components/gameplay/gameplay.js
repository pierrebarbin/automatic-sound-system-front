import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
// import GameSearch from //unTruc qui arrivera plus tard
// import YtPlayer from //unTruc qui arrivera plus tard


// voir https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

const Gameplay = props => {
  const [musique, setMusique] = useState(
  [
    {
        id: 1,
        url: "https://www.youtube.com/watch?v=y6120QOlsfU",
        title: "Sandstorm",
        singer: "Darude"
    },
    {
        id: 2,
        url: "https://www.youtube.com/watch?v=zA52uNzx7Y4",
        title: "Blue",
        singer: "Eiffel 65"
    },
    {
        id: 3,
        url: "https://www.youtube.com/watch?v=SYnVYJDxu2Q",
        title: "Rasputin",
        singer: "Boney M."
    },
    {
        id: 4,
        url: "https://www.youtube.com/watch?v=Nnu1E5Kslig",
        title: "Stairway To Heaven",
        singer: "Led Zeppelin"
    }
  ]);

  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    
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

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div>
        <button onClick={toggle}>
        {isActive ? '' : 'Start'}
      </button></div>
    </div>
  );
};


export default Gameplay
