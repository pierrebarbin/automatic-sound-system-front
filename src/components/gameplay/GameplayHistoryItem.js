import React from "react";

import SVG from "react-inlinesvg";
import svgNote from "../../assets/icons/zondicons/music-notes.svg"; 
import svgArtist from "../../assets/icons/zondicons/music-artist.svg";

const GameplayHistoryItem = ({ parameters }) => {
    const { title, singer, isWin } = parameters;
    return (
        <div className="flex flex-row">
            <div className="flex-1">{title}</div>
            <div className="flex-1">{singer}</div>
            {isWin == 0 && <div className="flex-1"></div>}

            {isWin == 1 && 
                <div className="flex-1 inline-flex">
                    <SVG
                        className="h-6 w-6 fill-current pt-2 mr-2"
                        src={svgArtist}
                        title="Artiste trouvé"
                    />
                </div>
            }

            {isWin == 2 && 
                <div className="flex-1 inline-flex">
                    <SVG
                        className="h-6 w-6 fill-current pt-2"
                        src={svgNote}
                        title="Titre trouvé"
                    />   
                </div>
            }

            {isWin == 3 && 
                <div className="flex-1 inline-flex">
                    <SVG
                        className="h-6 w-6 fill-current pt-2 mr-2"
                        src={svgArtist}
                        title="Artiste trouvé"
                    />

                    <SVG
                        className="h-6 w-6 fill-current pt-2"
                        src={svgNote}
                        title="Titre trouvé"
                    />    
                </div>
            }
        </div>
    );
};

export default GameplayHistoryItem;