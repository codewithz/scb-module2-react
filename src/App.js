import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RoutingHome from './components/routing/RoutingHome';
import UseCaseOneHome from './components/UseCaseOne/UseCaseOneHome';
import UseCaseTwoHome from './components/UseCaseTwo/UseCaseTwoHome';
import Module2Home from './components/Module2/Module2Home';
import NavigationComponent from './components/NavigationComponent';
import MaterialUIHome from './components/material-ui/MaterialUIHome';
import { ToastContainer } from 'react-toastify';
import ToastifyHome from './components/toastify/ToastifyHome';
import 'react-toastify/dist/ReactToastify.css';
import ValidationJoiHome from './components/validation-joi/ValidationJoiHome';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
        <BrowserRouter>
          <NavigationComponent />

          <Switch>
            <Route path="/ucone" component={UseCaseOneHome} />
            <Route path="/module2" component={Module2Home} />
            <Route path="/uctwo" component={UseCaseTwoHome} />
            <Route path="/routing" component={RoutingHome} />
            <Route path="/material" component={MaterialUIHome} />
            <Route path="/toastify" component={ToastifyHome} />
            <Route path="/validation" component={ValidationJoiHome} />
          </Switch>

        </BrowserRouter>
    


    </div>
  );
}

export default App;
