import logo from './logo.svg';
import "./Assets/Styles/global.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Homepage from "./Pages/homepage";
import Play from "./Pages/play";
import Room from "./Pages/room";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/play" element={<Play />} />
                <Route path="/room" element={<Room />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
