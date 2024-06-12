import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div >
      
     <BrowserRouter>
     <Routes>
     <Route path='/' element ={<AddUser/>}/>
      <Route path='/login' element ={<LoginUser/>}/>
      
      <Route path='/ViewUser' element ={<ViewUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
