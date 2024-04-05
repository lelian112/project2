import React from 'react';
import "./Login.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {



  return (
    <>
      <div id='loginLayout'> {/*나중에 지울거*/}
        <div id='loginContainer'>

          <form>
            <div className='infoContainer'>
              <div className='id'>
                <i class="login_icon fas fa-user"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

              <div className='pw'>
                <i class="login_icon fas fa-lock"></i>
                <input type='password' className='input_text' placeholder='Enter PW' />
              </div>
            </div>

            <button id='loginSubmit'>Login</button>
            <Link to='/policy'>
              <button id='signUpButton'>SignUp</button>
            </Link>
          </form>

        </div >
      </div >
    </>
  );
};

export default Login;