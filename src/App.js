import logo from './logo.svg';
import './App.css';
import AddBlog from './components/AddBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBlog/>}/>
      <Route path='/signin' element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
