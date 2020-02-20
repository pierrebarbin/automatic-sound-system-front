import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Classement from "../classement/Classement.js";
import TablePlayList from "../home/HomeTablePlaylist";
const Index = () => {
    const { t } = useTranslation();
    const [classementItems, setClassementItems] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        getClassement();
    }, []);
    const getClassement = event => {
        //TODO : Utiliser Axios et taper sur l'api
        setClassementItems([
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
    useEffect(() => {
        getPlaylist();
    }, []);
    const getPlaylist = event => {
        //TODO : Utiliser Axios et taper sur l'api
        setPlaylists([
            { id: 1, title: "ut nisi", scoreMax: 21, creator: "Nasim", npu: 7 },
            {
                id: 2,
                title: "gravida nunc",
                scoreMax: 32,
                creator: "Ann",
                npu: 7
            },
            {
                id: 3,
                title: "eget magna.",
                scoreMax: 30,
                creator: "Jemima",
                npu: 5
            },
            {
                id: 4,
                title: "nulla ante,",
                scoreMax: 50,
                creator: "Charity",
                npu: 8
            },
            {
                id: 5,
                title: "mollis. Integer",
                scoreMax: 44,
                creator: "Wesley",
                npu: 14
            }
        ]);
    };
    return (
        <div>
            <div>
                <h2> Descritpion général de l'application : </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vitae lorem turpis. Etiam sollicitudin, lectus sit
                    amet gravida hendrerit, lacus augue viverra dolor, sed
                    sagittis odio nulla vitae tellus. Suspendisse ut auctor
                    quam. Quisque volutpat ex nunc, non interdum enim hendrerit
                    vitae. Sed a aliquam tortor. Praesent mi tellus, volutpat a
                    dictum non, sagittis id nulla. Quisque rhoncus mattis ipsum
                    quis lacinia. Mauris varius nibh id metus venenatis
                    lobortis.
                </p>
            </div>
            <div>
                <TablePlayList playlists={playlists} t={t} />
            </div>
            <div>
                <Classement
                    classementItems={classementItems}
                    title={t("home.classement.title")}
                    t={t}
                />
            </div>
        </div>
    );
};

export default Index;
