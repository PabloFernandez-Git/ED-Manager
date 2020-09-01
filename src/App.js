import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';


const App = () => (
  <Provider store={store}>
    <main>
      <h1>ED manager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
