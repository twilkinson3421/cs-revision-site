import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Revise from './pages/Revise';
import Test from './pages/Test';

function App() {
  return (
    <div className='App'>
      <MainNavigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/revise' component={Revise} />
        <Route path='/test' component={Test} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
