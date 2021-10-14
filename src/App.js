import "./App.css";
import Header from 'components/header/header';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Grid from 'components/grid/grid';
import Peso from 'components/peso/peso';
import Pezzi from 'components/pezzi/pezzi';


function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Header environment="grid"/>
            <Grid />
          </Route>

          <Route exact path="/peso">
            <Header environment="calc"/>
            <Peso />
          </Route>

          <Route exact path="/pezzi">
            <Header environment="calc"/>
            <Pezzi />
          </Route>

          <Route exact path="/pezzatura">
            <Header environment="calc"/>
            {/* <Pezzatura /> */}
          </Route>
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
