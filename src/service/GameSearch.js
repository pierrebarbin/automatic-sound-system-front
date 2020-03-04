import React, {useState} from 'react';
import levenshtein from 'js-levenshtein';

export default GameSearch

/**
 * @return {number}
 */
export function GameSearch(InputValue, valueSinger, valueSong, BooleanSinger, BooleanSong) {
    let concatSingerSong = valueSinger + " " + valueSong;
    let concatSongSinger = valueSong + " " + valueSinger;
    //  calcul des différences entre les mots
    let LevenSinger = levenshtein(InputValue.toLowerCase(), valueSinger.toLowerCase());
    let LevenSong = levenshtein(InputValue.toLowerCase(), valueSong.toLowerCase());
    let LevenSingerSong = levenshtein(InputValue.toLowerCase(), concatSingerSong.toLowerCase());
    let LevenSongSinger = levenshtein(InputValue.toLowerCase(), concatSongSinger.toLowerCase());
    //  calcul de la longueur des chaines de caractères
    let connectorSinger = valueSinger.length;
    let connectorSong = valueSong.length;
    let connectorSingerSong = concatSingerSong.length;
    let connectorSongSinger = concatSongSinger.length;

    let switchLevensinger = LevenSinger / connectorSinger * 100;
    let switchLevensong = LevenSong / connectorSong * 100;
    let switchLevensingersong = LevenSingerSong / connectorSingerSong * 100;
    let switchLevensongsinger = LevenSongSinger / connectorSongSinger * 100;

    switch (true) {
        case BooleanSong && BooleanSinger:
            switch (true) {
                case ((switchLevensong <= 25) || (switchLevensinger <= 25) || (switchLevensingersong <= 25) || (switchLevensongsinger <= 25)) :
                    if (switchLevensong <= 25) {
                        return 2;
                    } else if (switchLevensinger <= 25) {
                        return 1;
                    } else {
                        return 3;
                    }

                case (((switchLevensong > 25) && (switchLevensong <= 45)) || ((switchLevensinger > 25) && (switchLevensinger <= 45))
                    || ((switchLevensingersong > 25) && (switchLevensingersong <= 45)) || ((switchLevensongsinger > 25) && (switchLevensongsinger <= 45))) :
                    return 4;

                default :
                    return 0;
            }
            break;
        case BooleanSong && !BooleanSinger:
            if (switchLevensong <= 25) {
                return 2;
            } else if ((switchLevensong > 25) && (switchLevensong <= 45)) {
                return 4;
            } else
                return 0;

        case !BooleanSong && BooleanSinger:
            if (switchLevensinger <= 25) {
                return 1;
            } else if ((switchLevensinger > 25) && (switchLevensinger <= 45)) {
                return 4;
            } else
                return 0;

        default :
            return 0;
    }
}