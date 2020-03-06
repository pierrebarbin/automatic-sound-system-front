import React, { useState, useEffect } from "react";
import ProfilTab from "./ProfileTab";
import ProfilFollowItem from "./ProfileFollowItem";
import ProfilPlaylistItem from "./ProfilePlaylistItem";
import ProfilHistoryItem from "./ProfileHistoryItem";
import {useTranslation} from "react-i18next";

const ProfileBottomTab = () => {
    const { t } = useTranslation();

    const [tab, setTab] = useState();
    const [currentTab, setCurrentTab] = useState('Playlist');

    const getTab = tab => {
        setCurrentTab(tab);
        var elements = [];
        var component = "";
        var headers = [];
        switch (tab) {
            case "Historique":
                headers = ["Playlist", "Score", "Createur", "Date"];
                component = ProfilHistoryItem;
                elements = [
                    {
                        id: 1,
                        playlist: "tempor diam",
                        score: 3,
                        creator: "Cheyenne",
                        date: "03/05/20"
                    },
                    {
                        id: 2,
                        playlist: "amet nulla.",
                        score: 5,
                        creator: "Cedric",
                        date: "13/02/21"
                    },
                    {
                        id: 3,
                        playlist: "a purus.",
                        score: 5,
                        creator: "Reed",
                        date: "22/12/20"
                    },
                    {
                        id: 4,
                        playlist: "ut eros",
                        score: 4,
                        creator: "Yvonne",
                        date: "29/02/20"
                    },
                    {
                        id: 5,
                        playlist: "augue scelerisque",
                        score: 1,
                        creator: "Regina",
                        date: "20/04/20"
                    },
                    {
                        id: 6,
                        playlist: "elit, a",
                        score: 1,
                        creator: "Whitney",
                        date: "24/03/20"
                    },
                    {
                        id: 7,
                        playlist: "Duis risus",
                        score: 9,
                        creator: "Pamela",
                        date: "10/07/19"
                    },
                    {
                        id: 8,
                        playlist: "non justo.",
                        score: 4,
                        creator: "Linus",
                        date: "18/08/20"
                    }
                ];
                break;
            case "Playlist":
            default:
                headers = ["Titre", "Score"];
                component = ProfilPlaylistItem;
                elements = [
                    {
                        id: 1,
                        title: "Ut semper",
                        score: 9
                    },
                    {
                        id: 2,
                        title: "Integer eu",
                        score: 3
                    },
                    {
                        id: 3,
                        title: "orci sem",
                        score: 10
                    },
                    {
                        id: 4,
                        title: "magna. Praesent",
                        score: 9
                    },
                    {
                        id: 5,
                        title: "metus vitae",
                        score: 9
                    },
                    {
                        id: 6,
                        title: "Nulla tempor",
                        score: 9
                    },
                    {
                        id: 7,
                        title: "sit amet,",
                        score: 9
                    },
                    {
                        id: 8,
                        title: "nec quam.",
                        score: 2
                    },
                    {
                        id: 9,
                        title: "molestie tellus.",
                        score: 7
                    },
                    {
                        id: 10,
                        title: "placerat. Cras",
                        score: 9
                    }
                ];
                break;
        }
        setTab(
            <ProfilTab
                headers={headers}
                elements={elements}
                component={component}
            />
        );
    };

    useEffect(() => {
        getTab('Playlist');
    }, []);

    return (
        <div className="mt-10 bg-gray-900 p-4 shadow-lg rounded-lg">
            <div>
                <button
                    className={`px-3 py-2 rounded-full cursor-pointer focus:outline-none ${currentTab === "Playlist"? 'bg-gray-800' : ''}`}
                    onClick={() => getTab("Playlist")}
                >
                    {t('profile.tab.playlist')}
                </button>
                <button
                    className={`px-3 py-2 rounded-full cursor-pointer focus:outline-none ${currentTab === "Historique"? 'bg-gray-800' : ''}`}
                    onClick={() => getTab("Historique")}
                >
                    {t('profile.tab.history')}
                </button>
                <button
                    className={`px-3 py-2 rounded-full cursor-pointer focus:outline-none ${currentTab === "Follow"? 'bg-gray-800' : ''}`}
                    onClick={() => getTab("Follow")}
                >
                    {t('profile.tab.follow')}
                </button>
                <button
                    className={`px-3 py-2 rounded-full cursor-pointer focus:outline-none ${currentTab === "Badges"? 'bg-gray-800' : ''}`}
                    onClick={() => getTab("Badges")}
                >
                    {t('profile.tab.badges')}
                </button>
            </div>
            <div className="separator-b mt-2"/>
            <div>{tab}</div>
        </div>
    );
};

export default ProfileBottomTab;
