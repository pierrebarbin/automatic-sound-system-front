import React, { Component } from 'react';
import RouteConfig from "./routes/RouteConfig";

class App extends Component {
    render() {
        return (
            <div id="App">
                <h1>Hi =)</h1>
                <RouteConfig />
            </div>
        );
    }
}

export default App;
