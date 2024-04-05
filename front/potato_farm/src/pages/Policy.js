import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Policy.css';

const Policy = () => {
  return (
    <>
      <ul id='policyLayout'> {/*나중에 지울것*/}
        <ul id='policyContainer'>

          {/* <label for='checkBox'>
            <li className='policyAll'>
              <em className='option_point'>[필수]</em>
              <div className='text'>전체 동의하기</div>
            </li>
          </label> */}

          <div className='policyAll'>
            <input type='checkbox' id='checkBox'></input>
            <label for='checkBox'>
              <div className='text'>전체 동의하기</div>
            </label>
            <div className='policyAllContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

          <div className='policy'>
            <input type='checkbox' id='checkBox'></input>
            <label for='checkBox'>
              <em className='must_point'>[필수]</em>
              <div className='text'>이용약관</div>
            </label>
            <div className='policyContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

          <div className='policy'>
            <input type='checkbox' id='checkBox'></input>
            <label for='checkBox'>
              <em className='must_point'>[필수]</em>
              <div className='text'>개인정보 이용</div>
            </label>
            <div className='policyContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

          <div className='policy'>
            <input type='checkbox' id='checkBox'></input>
            <label for='checkBox'>
              <em className='option_point'>[선택]</em>
              <div className='text'>해택&이벤트</div>
            </label>
            <div className='policyContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

        </ul>

        <Link to='/signup'>
          <button id='policySubmit'>Next</button>
        </Link>
      </ul>

    </>
  );
};

export default Policy;