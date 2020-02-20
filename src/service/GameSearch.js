import React, {useState} from 'react';
import levenshtein from 'js-levenshtein';
export default GameSearch
/**
 * @return {number}
 */
export function GameSearch(InputValue, valueSinger, valueSong, BooleanSinger, BooleanSong) {
    //récupération de l'api https://www.npmjs.com/package/node-levenshtein
    console.log("phoque")
    //  calcul des différences entre les mots
    let LevenSinger = levenshtein(InputValue, valueSinger);
    let LevenSong = levenshtein(InputValue, valueSong);
    //  calcul de la longueur des chaines de caractères
    let connectorSinger = valueSinger.length;
    let connectorSong = valueSong.length;

    switch (true) {
        //  cases pour le filtrage de tout
        case BooleanSong && BooleanSinger && (LevenSong / connectorSong * 100 >= 20 || LevenSinger / connectorSinger * 100 >= 20):
            return 1;
        case BooleanSong && BooleanSinger && (LevenSong / connectorSong * 100 < 20 || LevenSinger / connectorSinger * 100 < 20):
            if ((LevenSong / connectorSong * 100 < 20 && LevenSong / connectorSong * 100 >= 40) || (LevenSinger / connectorSinger * 100 < 20 && LevenSinger / connectorSinger * 100 >= 40)) {
                return 2
            }
            return 0;
        //    cases pour le filtrage des musique
        case BooleanSong && !BooleanSinger && LevenSong / connectorSong * 100 >= 20:
            return 1;
        case BooleanSong && !BooleanSinger && LevenSong / connectorSong * 100 < 20:
            if (LevenSong / connectorSong * 100 < 20 && LevenSong / connectorSong * 100 >= 40) {
                return 2
            } else
                return 0;
        //    cases pour le filtrage des chanteurs
        case !BooleanSong && BooleanSinger && LevenSinger / connectorSinger * 100 >= 20:
            return 1;
        case !BooleanSong && BooleanSinger && LevenSinger / connectorSinger * 100 < 20:
            if (LevenSinger / connectorSinger * 100 < 20 && LevenSinger / connectorSinger * 100 >= 40) {
                return 2;
            }
            return 0;
        // case erreur
        case !BooleanSong && !BooleanSinger:
            return 3;
        default :
            return 3;
    }
}