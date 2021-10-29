import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Revise from './pages/Revise';
import Test from './pages/Test';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/revise' component={Revise} />
        <Route path='/test' component={Test} />
      </Switch>
    </div>
  );
}

export default App;
