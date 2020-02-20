import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
// import GameSearch from './GameSearch'
// import YtPlayer from //unTruc qui arrivera plus tard


// voir https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

const Gameplay = props => {
  const [musique, setMusique] = useState(
  [
    {
        id: 1,
        url: "https://www.youtube.com/watch?v=y6120QOlsfU",
        title: "Sandstorm",
        singer: "Darude",
        bArtiste: true,
        bTitle: true
    },
    {
        id: 2,
        url: "https://www.youtube.com/watch?v=zA52uNzx7Y4",
        title: "Blue",
        singer: "Eiffel 65",
        bArtiste: true,
        bTitle: true
    },
    {
        id: 3,
        url: "https://www.youtube.com/watch?v=SYnVYJDxu2Q",
        title: "Rasputin",
        singer: "Boney M.",
        bArtiste: true,
        bTitle: true
    },
    {
        id: 4,
        url: "https://www.youtube.com/watch?v=Nnu1E5Kslig",
        title: "Stairway To Heaven",
        singer: "Led Zeppelin",
        bArtiste: true,
        bTitle: true
    }
  ]);

  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [valueInput, setValueInput] = useState("");

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

  const handleSubmit = (event) => {
    alert(`call le levenstein avec  ${valueInput} et les reponses`)
}

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div>
        <button onClick={toggle}>
          {isActive ? '' : 'Start'}
        </button>
      </div>
      <br/>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={valueInput}
            onChange={e => setValueInput(e.target.value)}
          />
          <input type="submit" value="submit"/>
        </form>
      </div>
    </div>
  );
};


export default Gameplay
