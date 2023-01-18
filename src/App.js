import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SignUp from './pages/Authentication/SignUp';
import Login from './pages/Authentication/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<PrivateRoute name="Home"><Home/></PrivateRoute>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
