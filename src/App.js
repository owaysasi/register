import Buttons from './Components/Buttons/Buttons';
import './App.css';
import Inputs from './Components/Input/Inputs';
import Passinput from './Components/Passinput/Passinput';
import Checkin from './Components/Checkin/Checkin';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import { BrowserRouter as Router,Switch, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
