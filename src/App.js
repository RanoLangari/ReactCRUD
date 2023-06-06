import './App.css';
import TableComponnents from "./components/table.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddMhs from './components/addMhs';
import EditMhs from './components/editMhs';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableComponnents/>}/>
        <Route path="/add" element={<AddMhs/>}/>
        <Route path="/edit/:id" element={<EditMhs/>}/>

      </Routes>
    </BrowserRouter>  
    
    </div>
  );
}

export default App;
