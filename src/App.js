import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

// Paginas
import Login from './view/login/index';
import Register from './view/register/index';
import Home from './view/home/index';

function App() {
  return (
    // Para o store ficar disponivel para todas as rotas utilizar a sintaxe abaixo
    <Provider store={store}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Router>
   </Provider>
  );
}

export default App;
