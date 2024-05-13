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
    } else {
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
                아직도 너의 소리를 듣고
                아직도 너의 손길을 느껴
                오늘도 난 너의 흔적 안에 살았죠
                아직도 너의 모습이 보여
                아직도 너의 온기를 느껴
                오늘도 난 너의 시간 안에 살았죠
                길을 지나는 어떤 낯선 이의 모습 속에도
                바람을 타고 쓸쓸히 춤추는 저 낙엽 위에도
                뺨을 스치는 어느 저녁에 그 공기 속에도
                내가 보고 듣고 느끼는 모든 것에 니가 있어 그래
                어떤가요 그댄 어떤가요 그댄
                당신도 나와 같나요 어떤가요 그댄
                지금도 난 너를 느끼죠
                이렇게 노랠 부르는 지금 이 순간도
                난 그대가 보여
                내일도 난 너를 보겠죠
                내일도 난 너를 듣겠죠
                내일도 모든게 오늘 하루와 같겠죠
                길을 지나는 어떤 낯선 이의 모습 속에도
                바람을 타고 쓸쓸히 춤추는 저 낙엽 위에도
                뺨을 스치는 어느 저녁에 그 공기 속에도
                내가 보고 듣고 느끼는 모든 것에 니가 있어 그래
                어떤가요 그댄 어떤가요 그댄
                당신도 나와 같나요 어떤가요 그댄
                길가에 덩그러니 놓여진 저 의자 위에도
                물을 마시려 무심코 집어든 유리잔 안에도
                나를 바라보기 위해 마주한 그 거울 속에도
                귓가에 살며시 내려앉은 음악 속에도 니가 있어
                어떡하죠 이젠 어떡하죠 이젠
                그대는 지웠을텐데 어떡하죠 이제 우린..
                랄라라라라라라라 랄라라라랄라라라 랄라라라랄라라라 라
                랄라라라라라라라 랄라라라랄라라라 랄라라라랄라라라 라
                그리움의 문을열고 너의 기억이 날찾아와
                자꾸 눈시울이 붉어져
                그리움의 문을 열고 너의 기억이 날 찾아와
                자꾸만 가슴이 미어져
                그리움의 문을 열고 너의 기억이 날 찾아와
                자꾸 눈시울이 붉어져
                그리움의 문을 열고 너의 기억이 날 찾아와
                자꾸만 가슴이 미어져
                랄라라라라라라라 랄라라라랄라라라 랄라라라랄라라라 라
                랄라라라라라라라 랄라라라랄라라라 랄라라라랄라라라 라
                랄라라라라라라라 랄라라라랄라라라 랄라라라랄라라라 라
                랄라라라라라라라 랄라라라랄라라라 랄라라라랄라라라 라
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
                아무 말 없이 내게서
                커져만 가는 게
                아무래도 이대론 안 되겠어
                어쩌다 내가 이렇게
                네게 빠진 건지
                이유를 나도 모르겠어
                넌 왜 내게서 맴돌아
                뭘 해도 신경도 쓰이고
                뭘 해도 궁금해지고
                넌 왜 내게서 맴돌아
                oh 어떡해 나
                자꾸만 생각이나
                말해! 뭐해?, 말해! 뭐해?
                이러다가 바보처럼
                한눈팔게 하지 말고
                말해볼래, 말해볼래
                나의 맘에 담긴 사람
                you are my only one
                너무나 사랑을 해도
                눈물 난다는 게
                그런 말이 나
                이해가 되지 않아
                하지만 그댈 본 순간
                두 눈 가득 고인
                눈물이 사랑인 것 같아
                넌 왜 내게서 맴돌아
                뭘 해도 신경도 쓰이고
                뭘 해도 궁금해지고
                난 너 하나만 생각해
                이렇게 난
                자꾸만 입 맞추고
                말해! 뭐해?,
                말해! 뭐해?
                이러다가 바보처럼
                한눈팔게 하지 말고
                말해볼래, 말해볼래
                나의 맘에 담긴 사람
                you are my only one
                내 모든 게 서툴다 해도
                네 곁에 나 머물고만
                싶어지는 게
                사랑일까 사랑일 거야
                너의, 너의 남자 되고 싶어
                말해! 뭐해?, 말해! 뭐해?
                내게 오는 사랑은 다
                그대라는 이름인걸
                말해! 뭐해?, 말해! 뭐해?
                나의 맘에 담긴 사람
                you are my only one
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
                Oh Boy Oh Boy Oh Boy Oh Boy
                Oh Boy 날 비춘 햇빛 Oh Boy
                모두 네 눈빛 Oh Boy
                넌 너무 눈이 부셔 Hey
                Oh Boy 귓가에 살며시
                Oh Boy 달콤한 목소리
                Oh Boy 잠든 날 깨워준 너 Eh
                배운 적 없었던 말로 입을 열고
                오직 널 담으려 감은 눈을 뜨고
                나조차 정말 몰랐던 날 발견한 걸 Yeah
                꿈에 그려온 환상 속
                그가 날 찾아와 찾아와 찾아와
                또 말없이 다가와 숨 멎는 미소만
                넌 내게 깜짝 난 눈만 깜박
                입술 닿을 듯 시간이 멈춘 순간
                내 안으로 새로운 계절이 불어와
                Oh Boy Oh Boy Oh Boy Oh Boy
                Oh Boy 숨겨진 나를 깨워줄래
                Oh Boy 눈부신 네게 눈을 뜰 때
                Oh Boy 어제완 다른 세상이 돼 Oh Boy
                Oh Boy 마치 퍼즐처럼
                Oh Boy 한 조각이 없던
                Oh Boy 날 완벽히 맞춘 너야
                익숙한 세상이 왠지 특별하게
                네가 날 불러서 전부 아름답게
                놀라운 이런 감정은 난 처음인데 Yeah
                Oh 운명은 살짝 부족해 이건 기적인 걸
                꿈보다 멋진 현실 앞에 Yeah
                더 이상 잠들지 못해 처음 깨어난 이 맘을
                말로는 표현 못해 나만을 봐줘 나의 그대
                작은 속삭임 하나에 긴 꿈을 벗어나 벗어나 벗어나
                넌 지긋한 눈빛과 따뜻한 미소만
                참 낯선 향기 또 네 목소리
                날 바라보는 네 눈을 바라본 나
                왜 이름도 몰랐던 꽃으로 피어나
                Oh Boy
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