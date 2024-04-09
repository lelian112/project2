import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Policy from './pages/Policy';
import Signup from './pages/Signup';
import Mypage from './layout/Mypage';
import Calendar from './mypage/Calendar';

function App() {
  return (
    <div >
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='policy' element={<Policy />} />
        <Route path='signup' element={<Signup />} />

        <Route path='mypage' element={<Mypage />} >
          {/* <Route index element={<Mypage />} /> */}
          <Route path='calendar' element={<Calendar />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
