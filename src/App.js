import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadAudio from "./pages/UploadAudio";
import ContextAPI from "./ContextAPI";

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
          </Switch>
        </Router>
      </ContextAPI>
    </div>
  );
}

export default App;
