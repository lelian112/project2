import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Policy.css';

const Policy = () => {

  // 전체 선택 상태를 관리하는 상태 변수
  const [selectAll, setSelectAll] = useState(false);

  // 개별 체크박스 선택 상태를 관리하는 상태 변수들
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const navigate = useNavigate();

  // 체크박스 선택 상태를 업데이트하는 핸들러 함수들
  const handleCheckboxChange = (checkboxNumber) => {
    switch (checkboxNumber) {
      case 1:
        setCheckbox1(!checkbox1);
        break;
      case 2:
        setCheckbox2(!checkbox2);
        break;
      case 3:
        setCheckbox3(!checkbox3);
        break;
      default:
        break;
    }

    //체크박스 하나 지웠을때 전체선택 체크박스 해제 = 하나라도 false일때
    if (checkbox1 || checkbox2 || checkbox3) {
      setSelectAll(false);
    }
  };

  const handleCheckBoxAll = () => {
    setSelectAll(!selectAll);
    setCheckbox1(!selectAll);
    setCheckbox2(!selectAll);
    setCheckbox3(!selectAll);

  }

  const submit = () => {
    if (!checkbox1 || !checkbox2) {
      alert('필수사항을 선택해 주세요');
      // window.location.replace('/policy')
      return;
    }else{
      navigate('/signup');
    }
  };


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
            <input type='checkbox' id='checkBox' checked={selectAll} onChange={handleCheckBoxAll}></input>
            <label for='checkBox'>

            </label>
            <div className='text'>전체 동의하기</div>
            <div className='policyAllContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

          <div className='policy'>
            <input type='checkbox' id='checkBox' checked={checkbox1} onChange={() => handleCheckboxChange(1)} ></input>
            <label for='checkBox' />
            <em className='must_point'>[필수]</em>
            <div className='text'>이용약관</div>
            <div className='policyContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

          <div className='policy'>
            <input type='checkbox' id='checkBox' checked={checkbox2} onChange={() => handleCheckboxChange(2)} ></input>
            <label for='checkBox' />
            <em className='must_point'>[필수]</em>
            <div className='text'>개인정보 이용</div>
            <div className='policyContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

          <div className='policy'>
            <input type='checkbox' id='checkBox' checked={checkbox3} onChange={() => handleCheckboxChange(3)} ></input>
            <label for='checkBox' />
            <em className='option_point'>[선택]</em>
            <div className='text'>해택&이벤트</div>
            <div className='policyContent'>
              <p>
                안녕하세요
              </p>
            </div>
          </div>

        </ul>


        <button id='policySubmit' onClick={submit}>Next</button>

      </ul>

    </>
  );
};

export default Policy;