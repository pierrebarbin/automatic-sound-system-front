import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import GameSearch from //unTruc qui arrivera plus tard
// import YtPlayer from //unTruc qui arrivera plus tard


// TODO faire fonctionner le timer

const Gameplay = props => {
    const [date,setDate] = useState({date: new Date()})
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

    componentDidMount => {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    };
    
    tick =>{
        this.setDate({
            date: new Date()
        });
    };

    return (
        <div>

            <h1>Hello, world!</h1>
            <h2>It is  {this.date.date.toLocaleTimeString()}.</h2>





            <div>
                {/* <YtPlayer messages={messages}/> */}
            </div>
            <div>
                {/* <GameSearch addMessages={addMessage}/> */}
            </div>
            
        </div>
    )
}


export default Gameplay
