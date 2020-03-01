import React, {useState} from 'react';
import RouteConfig from "./routes/RouteConfig";
import TheHeader from "./common/TheHeader";
import {BrowserRouter as Router} from "react-router-dom";
import TheRightSidePanel from "./common/TheRightSidePanel";
import {getUserLogged} from "../service/entity/userService";

const App = props => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name:
                "Pierrick",
            avatar:
                "https://pbs.twimg.com/profile_images/2971537976/6850da50f288bece1596e11f0b753f8a.jpeg"
        },
        {
            id: 2,
            name:
                "Julie",
            avatar:
                "https://static-s.aa-cdn.net/img/gp/20600001330578/dNIOzHDFe7geP8xljuRcZ4tRj-6EVMIL2DUB_v6hMrqYb7yXQX7dLX5lEWypg4_RkA=w300?v=1"
        },
        {
            id: 3,
            name:
                "Pierre",
            avatar:
                "https://pbs.twimg.com/profile_images/737757686008152066/9A_nfpYL_400x400.jpg"
        },
        {
            id: 4,
            name:
                "J-B",
            avatar:
                "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg"
        },
        {
            id: 5,
            name:
                "J-B",
            avatar:
                "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg"
        },
        {
            id: 6,
            name:
                "J-B",
            avatar:
                "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg"
        },
        {
            id: 7,
            name:
                "J-B",
            avatar:
                "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg"
        },
        {
            id: 8,
            name:
                "J-B",
            avatar:
                "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg"
        },
        {
            id: 9,
            name:
                "J-B",
            avatar:
                "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg"
        },
        {
            id: 10,
            name:
                "J-B",
            avatar:
                "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg"
        }
    ]);

    getUserLogged();

    return (
        <div className="bg-gray-800 text-gray-500 min-h-full">
            <Router>
                <TheHeader/>
                <div className="w-4/5 pt-24 px-4">
                    <RouteConfig/>
                </div>
                <TheRightSidePanel users={users}/>
            </Router>
        </div>
    );
};

export default App;
