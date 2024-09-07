import './index.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NoteList from './components/NoteList';

function App() {
  return (
   
    <div className="App">
     <Navbar/>
     <NoteList/>
   
    </div>
  
  );
}

export default App;
