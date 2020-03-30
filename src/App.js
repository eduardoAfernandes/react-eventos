import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Paginas
import Login from './view/login/index';
import Register from './view/register/index';

function App() {
  return (
   <Router>
     <Route exact path='/' component={Login} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/register' component={Register} />

   </Router>
  );
}

export default App;
