import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Policy from './pages/Policy';
import Signup from './pages/Signup';
import Mypage from './layout/Mypage';
import Calendar from './mypage/Calendar';
import Setting from './mypage/Setting';
import EditInfo from './mypage/EditInfo';
import Changepw from './mypage/Changepw';
import Wish from './mypage/Wish';
import Rating from './mypage/Rating';
import Review from './mypage/Review';

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
          <Route path='wish' element={<Wish />} />
          <Route path='rating' element={<Rating />} />
          <Route path='review' element={<Review />} />
          <Route path='setting' element={<Setting />} />
          <Route path='setting/editinfo' element={<EditInfo />} />
          <Route path='setting/editinfo/changepw' element={<Changepw />} /> 
          
        </Route>


      </Routes>
    </div>
  );
}

export default App;
