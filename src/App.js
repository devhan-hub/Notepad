import './index.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import HomePage from './components/Home';

function App() {
  return (
   
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element = { <HomePage/>}/> 
 
       <Route path='/allnote' element = { <NoteList/>}/> 
       <Route path="/addnote" element={<AddNote />} />
       <Route path="/addnote/:id" element={<AddNote />} />

     </Routes>
   </Router>
    </div>
  
  );
}

export default App;
