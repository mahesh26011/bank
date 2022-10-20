import './App.css';

import{Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Profile from './component/Profile';
import Signin from './component/Signin';
import Login from './component/Login';
import Orders from './component/Orders';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Orders' element={<Orders/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
