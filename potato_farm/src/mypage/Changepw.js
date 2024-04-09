import React from 'react';
import './Changepw.css';
import { Link } from 'react-router-dom';

const Changepw = () => {
  return (
    <>
      <div id='changepwContainer'>
        <div className='changepwTitle'>
          <h3>회원 정보 수정</h3>
          <p>
            회원님의 소중한 정보를 정보를 안전하게 관리하세요.
          </p>
        </div>

        <div className='changepwContent'>
          <h4>비밀번호 변경</h4>
          <table id='changepw'>
            <tr>
              <td>비밀번호</td>
              <td>
                <input type='password' className='pwInput' />
              </td>

            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input type='password' className='pwInput' />
              </td>
            </tr>
          </table>

          <Link to='../setting/editinfo'>
            <button id='previous'>go back</button>
          </Link>
          
          <button id='change'>change</button>


        </div>
      </div>
    </>
  );
};

export default Changepw;