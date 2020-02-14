import React, { Component } from 'react';
import RouteConfig from "./routes/RouteConfig";
import TheHeader from "./common/TheHeader";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="bg-gray-800 text-white min-h-full">
                <Router>
                    <TheHeader/>
                    <div className="w-4/5 pt-24 px-4">
                        <RouteConfig/>
                    </div>
                    <div className="left-side-container fixed right-0 p-4 w-1/5">
                        <div className="h-full w-full box p-4">User</div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
