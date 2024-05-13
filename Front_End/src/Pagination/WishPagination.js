import React from "react";
import { useSelector } from "react-redux";

const WishPagination = ({ getWishList }) => {
  const pageInfo = useSelector((state) => state.wish.pageInfo) || {
    currentPage: 1,
  };
  const pageNumbers = [];

  for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
    pageNumbers.push(i);
  }

  const activeLinkStyle = {
    color: "rgb(255, 5, 88)",
    fontWeight: "bold",
    margin: "10px",
  };

  const defaultLinkStyle = {
    color: "#ccc",
    margin: "10px",
    cursor: "pointer",
  };

  return (
    <nav aria-label='...' style={{ display: "flex", justifyContent: "center" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: "0",
          padding: "10px",
        }}
      >
        {/* 이전 */}
        <li
          style={{ pointerEvents: pageInfo.startPage <= 1 ? "none" : "auto" }}
        >
          <span
            className='page-link'
            onClick={() => getWishList(pageInfo.startPage - pageInfo.blockPage)}
            style={{
              ...defaultLinkStyle,
              color: "black",
              borderColor: "#212529",
            }}
          >
            &laquo;
          </span>
        </li>
        {/* 페이지번호 출력 */}
        {pageNumbers &&
          pageNumbers.map((pnum, idx) => (
            <li key={pnum}>
              <span
                onClick={() => getWishList(pnum)}
                style={
                  pageInfo.currentPage === pnum
                    ? activeLinkStyle
                    : defaultLinkStyle
                }
              >
                {pnum}
              </span>
            </li>
          ))}
        {/* 다음 */}
        <li
          style={{
            pointerEvents:
              pageInfo.endPage >= pageInfo.totalPage ? "none" : "auto",
          }}
        >
          <span
            className='page-link'
            onClick={() => getWishList(pageInfo.startPage + pageInfo.blockPage)}
            style={{
              ...defaultLinkStyle,
              color: "black",
              borderColor: "#212529",
            }}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default WishPagination;
