import React from 'react';
import {Provider} from './Context';
import Contatcs from './Components/Contatcs';
import Form from './Components/Form';
import About from './Components/About';
import NavigationBar from './Components/NavigationBar';
import {HashRouter as Router , Route,Switch} from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Provider>
      <Router>
        <NavigationBar navbarName='Contact Manager' />
        <div className="container">
        {/* <Form /> 
        <Contatcs /> */}
        <Switch>
          <Route exact path='/' component={Contatcs} />
          <Route exact path='/Contact/Add' component={Form} />
          <Route exact path='/About' component={About} /> 
          <Route component={NotFound} />              
        </Switch>
    </div>
    </Router>
       
    </Provider>
  );
}

export default App;
