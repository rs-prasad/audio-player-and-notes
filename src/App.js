import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadAudio from "./pages/UploadAudio";
import AudioPlayer from "./pages/audio-player/AudioPlayer";
import ContextAPI from "./ContextAPI";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="navbar__title">Audio Player</h1>
      </nav>
      <ContextAPI>
        <Router>
          <Switch>
            <Route path="/" exact>
              <UploadAudio />
            </Route>
            <Route path="/audio-player" exact>
              <AudioPlayer />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </ContextAPI>
    </div>
  );
}

export default App;
