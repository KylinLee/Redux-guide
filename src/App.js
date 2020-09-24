import React from 'react';
import './App.css';
import Login from "./Components/Login"

function App() {
    return (
        <div className={"page"}>
            <div className={"frame"}>
                <Login/>
            </div>
            <div className={"frame"}>
                <Login/>
            </div>
            <div className={"frame"}>
                <Login/>
            </div>
            <div className={"frame"}>
                <Login/>
            </div>
        </div>
    )
}

export default App;
