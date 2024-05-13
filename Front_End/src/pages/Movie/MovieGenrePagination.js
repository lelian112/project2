import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const MovieGenrePagination = ({ getMovieList }) => {
  const { genre } = useParams();
  console.log("ggg", genre);

  const pageInfo = useSelector((state) => state.movie.pageInfo) || {
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
              getMovieList(pageInfo.startPage - pageInfo.blockPage, genre)
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
                  onClick={() => getMovieList(pnum, genre)}
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
              getMovieList(pageInfo.startPage + pageInfo.blockPage, genre)
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

export default MovieGenrePagination;
