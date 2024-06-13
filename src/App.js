import logo from './logo.svg';
import './App.css';
import AddBlog from './components/AddBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBlog/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
