import "./App.css";
import Header from 'components/header/header';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Grid from 'components/grid/grid';
import Home from 'components/home/home';
import Peso from 'components/peso/peso';
import Pezzi from 'components/pezzi/pezzi';
import Riepilogo from 'components/riepilogo/riepilogo';
import Pezzatura from 'components/pezzatura/pezzatura';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/grid/:day">
            <Grid />
          </Route>

          <Route path="/peso">
            <Peso />
          </Route>

          <Route path="/pezzi">
            <Pezzi />
          </Route>

          <Route path="/pezzatura">
            <Pezzatura />
          </Route>

          <Route path="/riepilogo/:day">
            <Riepilogo />
          </Route>
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
