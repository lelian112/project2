import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WrapModal = styled.div`
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;
const ModalInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CancelBtn = styled.button`
  margin-right: 5px;
  padding: 2px 8px;
  border: 1px #ededed8b solid;
  border-radius: 5px;
  background-color: black;
  color: white;
`;
const SumbitBtn = styled.button`
  padding: 2px 8px;
  border: 1px #ededed8b solid;
  border-radius: 5px;
  background-color: black;
  color: white;
`;

const LoginModal = (props) => {
  const navigator = useNavigate();

  const handleModalSubmit = () => {
    navigator(`/login`);
  };
  const handleModalCancel = () => {
    props.handleModalCancel();
  };
  return (
    <Modal>
      <WrapModal>
        <ModalInfo>로그인 후 이용해주세요.</ModalInfo>
        <Btn>
          <CancelBtn onClick={handleModalCancel}>취소</CancelBtn>
          <SumbitBtn onClick={handleModalSubmit}>확인</SumbitBtn>
        </Btn>
      </WrapModal>
    </Modal>
  );
};

export default LoginModal;
