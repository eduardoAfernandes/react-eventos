import React from 'react';
// Rotas
import { BrowserRouter as Router, Route } from 'react-router-dom';

// React Redux
import store from '../src/store/';
import { Provider } from 'react-redux';

// Paginas
import Login from './view/login/index';
import Register from './view/register/index';
import Home from './view/home/index';
import RecuperarSenha from './view/recuperar-senha/index';
import CadastroEventos from './view/cadastro-evento/index';
import DetalhesEvento from './view/detalhes-evento/index';

function App() {
  return (
    // Para o store ficar disponivel para todas as rotas utilizar a sintaxe abaixo
    <Provider store={store}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route  path='/my-events/:parametro' component={Home} />
          <Route exact path='/home' component={Home}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/forgot-password' component={RecuperarSenha}/>
          <Route exact path='/create-event' component={CadastroEventos}/>
          <Route path='/show-event/:id' component={DetalhesEvento}/>
        </Router>
   </Provider>
  );
}

export default App;
