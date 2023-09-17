import { Segment } from 'semantic-ui-react';
import './App.css';
//import Home from './views/home/Home';
import Rotas from './Rotas';


function App() {

  return (

    <div className="App">
      
      <Rotas />
      
      <div style={{ marginTop: '1%' }}>
        <Segment vertical color='black' size='tiny' textAlign='center'>
          &copy; Review - Projeto WEB 3
        </Segment>
      </div>

    </div>
  );
}

export default App;
