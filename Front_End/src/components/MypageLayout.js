import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const ShortcutMenu = styled(Link)`
  text-decoration: none;
`;

const MypageLayout = ({ children }) => {
  return (
    <>
      {/* <ShortcutMenu to="/mypage/mytickets"></ShortcutMenu>
      <ShortcutMenu to="/mypage/mvwntsee"></ShortcutMenu>
      <ShortcutMenu to="/mypage/mvisaw"></ShortcutMenu>
      <ShortcutMenu to="/mypage/mycomments"></ShortcutMenu> */}
      {/* <ShortcutMenu to="/mypage/">회원정보 수정</ShortcutMenu>
      <ShortcutMenu to="/mypage/">로그아웃</ShortcutMenu> */}
      <Outlet />
    </>
  );
};

export default MypageLayout;
