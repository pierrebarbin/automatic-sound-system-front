import React, {useState, useEffect} from 'react';
import data from "../../data";
import SongForm from "./SongForm";

/**
 * @return {number}
 */
function GameSearch() {
    const levenshtein = require('node-levenshtein');
    const [InputValue, setInputValue] = useState(SongForm);
    const [valueSinger, setvaluesinger] = useState(data.youtube[0]);
    const [valueSong, setvalueSong] = useState(data.youtube[1]);
    const [BooleanSinger, setBooleanSinger] = useState(data.youtube[2]);
    const [BooleanSong, setBooleanSong] = useState(data.youtube[3]);
    //  calcul des différences entre les mots
    var LevenSinger = levenshtein(InputValue, valueSinger);
    var LevenSong = levenshtein(InputValue, valueSong);
    //  calcul de la longueur des chaines de caractères
    var countnbcharSinger = valueSinger.length;
    var countnbcharSong = valueSong.length;

    switch (true) {
        //  cases pour le filtrage de tout
        case BooleanSong && BooleanSinger && (LevenSong / countnbcharSong * 100 >= 20 || LevenSinger / countnbcharSinger * 100 >= 20):
            return 1;
        case BooleanSong && BooleanSinger && (LevenSong / countnbcharSong * 100 < 20 || LevenSinger / countnbcharSinger * 100 < 20):
            if ((LevenSong / countnbcharSong * 100 < 20 && LevenSong / countnbcharSong * 100 >= 40) || (LevenSinger / countnbcharSinger * 100 < 20 && LevenSinger / countnbcharSinger * 100 >= 40)) {
                return 2
            }
            return 0;
        //    cases pour le filtrage des son
        case BooleanSong && !BooleanSinger && LevenSong / countnbcharSong * 100 >= 20:
            return 1;
        case BooleanSong && !BooleanSinger && LevenSong / countnbcharSong * 100 < 20:
            if (LevenSong / countnbcharSong * 100 < 20 && LevenSong / countnbcharSong * 100 >= 40) {
                return 2
            } else
                return 0;
        //    cases pour le filtrage des chanteurs
        case !BooleanSong && BooleanSinger && LevenSinger / countnbcharSinger * 100 >= 20:
            return 1;
        case !BooleanSong && BooleanSinger && LevenSinger / countnbcharSinger * 100 < 20:
            if (LevenSinger / countnbcharSinger * 100 < 20 && LevenSinger / countnbcharSinger * 100 >= 40) {
                return 2;
            }
            return 0;
        //
        case !BooleanSong && !BooleanSinger:
            return 3;
        default :
            return 3;
    }
}