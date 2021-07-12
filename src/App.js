import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './components/FormSignIn/index';
import SignUp from './components/FormRegister/index';
import Carousel from './components/Carousel/index';

import "./styles/global.scss";

function App() {
  return (
    <div className="base-container">
        <div className="content-carousel">
          <Carousel />
        </div>
        <div className="content-login">
            <h1>Invision</h1>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <SignIn />
                </Route>
                <Route path="/register">
                  <SignUp />
                </Route>
              </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
