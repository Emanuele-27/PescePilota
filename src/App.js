import "./App.css";
import Header from 'components/header/header';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Grid from 'components/grid/grid';
import Peso from 'components/peso/peso';


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
            <Header environment="peso"/>
            <Peso />
          </Route>

          <Route exact path="/pezzi">
            <Header environment="pezzi"/>
            {/* <Pezzi /> */}
          </Route>

          <Route exact path="/pezzatura">
            <Header environment="pezzatura"/>
            {/* <Pezzatura /> */}
          </Route>
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
