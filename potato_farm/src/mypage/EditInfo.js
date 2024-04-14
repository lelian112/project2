import React from 'react';
import './EditInfo.css';
import { Link } from 'react-router-dom';

const EditInfo = () => {


  return (
    <>
      <div id='editContainer'>
        {/* <div className='editTitle'>
          <h3>회원 정보 수정</h3>
          <p>
            회원님의 소중한 정보를 정보를 안전하게 관리하세요.
          </p>
        </div> */}

        <div className='editTable'>
          <table id='edit'>
            <tr>
              <th>hi</th>
              <th>hihi</th>

            </tr>
            <tr>
              <td>아이디</td>
              <td>dasd</td>

            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <Link to='changepw'>
                  <button id='changePw'>비밀번호 변경</button>
                </Link>
              </td>

            </tr>
            <tr>
              <td>이메일주소</td>
              <td>dasd</td>

            </tr>
            <tr>
              <td>닉네임</td>
              <td>dasd</td>

            </tr>
            <tr>
              <td>생년월일</td>
              <td>dasd</td>

            </tr>
            <tr>
              <td>휴대전화 번호</td>
              <td>dasdasdasasdasdasdasda</td>

            </tr>

            <tr>
              <td>한줄 소개</td>
              <td>dasdasdasasda</td>

            </tr>

            <tr>
              <td>프로필 사진</td>
              <td>dasdasdasasda</td>

            </tr>

          </table>
        </div>

        <button id='deleteAcct'>회원탈퇴</button>

      </div>
    </>
  );
};

export default EditInfo;