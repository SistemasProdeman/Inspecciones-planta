import React from 'react';
import "@material-tailwind/react/tailwind.css";
import './index.css'
import { Route, Switch  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from './Containers/Menu';
import NuevoRegistro from './Containers/NuevoRegistro';
import Rsu from './Containers/Rsu';
import Esp from './Containers/Esp';
import Pel from './Containers/Pel';
import Emer from './Containers/Emer';
import Energia from './Containers/Energia';
import Agua from './Containers/Agua';
import Registros from './Containers/Registros';
import DetalleRegistro from './Containers/DetalleRegistro';
import Ingresar from './Containers/Ingresar';
import Botonera from './Containers/Botonera';


function App() {

  const userLog = useSelector(state => state.sessionReducer.userState)

  return (
    <div>
        {/*userLog && <Nav/>*/}
      <Switch>
        <Route exact path="/">
          <Ingresar/>
        </Route>
        <Route path="/Menu">
          <Menu/>
        </Route>
        <Route path="/NuevoRegistro">
          <NuevoRegistro/>
        </Route>
        <Route path="/BotonesRegistro">
          <Botonera/>
        </Route>
        <Route path="/Rsu">
          <Rsu/>
        </Route>
        <Route path="/Esp">
          <Esp/>
        </Route>
        <Route path="/Pel">
          <Pel/>
        </Route>
        <Route path="/Emer">
          <Emer/>
        </Route>
        <Route path="/Energia">
          <Energia/>
        </Route>
        <Route path="/Agua">
          <Agua/>
        </Route>
        <Route path="/Registros">
          <Registros/>
        </Route>
        <Route path="/DetalleRegistro">
          <DetalleRegistro/>
        </Route>
      </Switch>
      {/*userLog && <Footer/>*/}
    </div>
  );
}

export default App;
