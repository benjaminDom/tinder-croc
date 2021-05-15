
import './App.css';
import Header from './Header'
import TinderCards from "./TinderCards"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SwipeButtons from "./SwipeButtons"
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/">
            <h2> I am the home page</h2>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
