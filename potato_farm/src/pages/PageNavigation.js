import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageNavigation = ({ getViewList }) => {
  //store에 저장된 값을 사용할 때 useSelector
  const pageInfo = useSelector((state) =>
    state.comment.pageInfo ? state.comment.pageInfo : { currentPage: 1 }
  );

  const pageNumbers = [];
  for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="..." style={{ display: "flex", justifyContent: "center" }}>
      <ul className="pagination">
        {/* 이전 */}
        <li
          className={
            pageInfo.startPage <= 1 ? "page-item disabled" : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() => getViewList(pageInfo.startPage - pageInfo.blockPage)}
            style={{
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
                  onClick={() => getViewList(pnum)}
                  className="page-link"
                  style={{
                    zIndex: 1,
                    color:
                      pageInfo.currentPage === pnum
                        ? "rgb(255, 5, 88)"
                        : "#ccc",
                    fontWeight:
                      pageInfo.currentPage === pnum ? "bold" : "normal",
                    backgroundColor:
                      pageInfo.currentPage === pnum ? "#000" : "#333",
                    borderColor: "#212529",
                    cursor: "pointer",
                  }}
                >
                  {pnum}
                </span>
              </li>
            );
          })}
        {/* 다음 */}
        <li
          className={
            pageInfo.endPage >= pageInfo.totalPage
              ? "page-item disabled"
              : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() => getViewList(pageInfo.startPage + pageInfo.blockPage)}
            style={{
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
