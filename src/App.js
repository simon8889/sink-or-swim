import React, { useRef } from 'react'
import { useScreenshot } from 'use-react-screenshot'
import GetAppIcon from '@material-ui/icons/GetApp'
import download from "downloadjs"
import './App.css';


import Column from "./components/Column/Column.js"

const App = () => {
    const appBody = useRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => {
        takeScreenshot(appBody.current)
            .then(data => download(data, "sink-or-swim", "image/png"))
            .catch(err => console.log(err))
    }

    return (
        <div className="app" ref={ appBody }>
            <div className="app__download" onClick={ getImage }>
                <GetAppIcon />
            </div>
            <h1 className="app__title">Sink or Swim</h1>
            <div className="app__columnsContainer">
                <Column title="Define" />
                <Column title="Prevent" />
                <Column title="Repair" />
                <Column title="Action benefits" />
                <Column title="Inaction effects" />
            </div>
        </div>
    );
}

export default App;
