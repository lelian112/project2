import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageNavigation = ({ getReviewList }) => {
  //store에 저장된 값을 사용할 때 useSelector
  const pageInfo = useSelector((state) => state.review.pageInfo) || {
    currentPage: 1,
  };

  // console.log("page", pageInfo.currentPage);
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
    <nav aria-label="..." style={{ display: "flex", justifyContent: "center" }}>
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
            className="page-link"
            onClick={() =>
              getReviewList(pageInfo.startPage - pageInfo.blockPage)
            }
            style={{
              ...defaultLinkStyle,
              color: "white",
              backgroundColor: "#333",
              borderColor: "#212529",
            }}
          >
            &laquo;
          </span>
        </li>

        {/* 페이지번호 출력 */}
        {pageNumbers &&
          pageNumbers.map((pnum, idx) => {
            return (
              <li key={pnum}>
                <span
                  onClick={() => getReviewList(pnum)}
                  className="page-link"
                  style={
                    pageInfo.currentPage === pnum
                      ? activeLinkStyle
                      : defaultLinkStyle
                  }
                >
                  {pnum}
                </span>
              </li>
            );
          })}
        {/* 다음 */}
        <li
          style={{
            pointerEvents:
              pageInfo.endPage >= pageInfo.totalPage ? "none" : "auto",
          }}
        >
          <span
            className="page-link"
            onClick={() =>
              getReviewList(pageInfo.startPage + pageInfo.blockPage)
            }
            style={{
              ...defaultLinkStyle,
              color: "white",
              backgroundColor: "#333",
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

export default PageNavigation;
