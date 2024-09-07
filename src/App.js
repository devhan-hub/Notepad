import './index.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Routes>
       <Route path='/navbar' element = {<Navbar/>}/> 
       <Route path='/' element = {<AddNote/>}/> 
     </Routes>
   </Router>
    </div>
  
  );
}

export default App;
