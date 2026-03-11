import './App.css';
import { Link, Route } from "wouter"
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'esto-es-con-provider',
        contextoRecibido: true
      }}>
    <div className="App">
      <section className='App-content'>
        <h1>Capítulo 3 - REACT desde 0</h1>
        <Link to='/'>Página principal</Link>
        <GifsContextProvider>

          <Route component={Home} path="/"/>
          <Route component={SearchResults} path="/search/:keyword"/>
          <Route component={Detail} path="/gif/:id"/>

        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
