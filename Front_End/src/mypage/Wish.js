import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Wish.css";
import axios from "axios";
import { wishActions } from "../toolkit/actions/mypagewish_action";
import WishPagination from "../Pagination/WishPagination";

const Wish = () => {
  {
    /*page */
  }
  const { currentPage } = useParams();
  console.log("page:", currentPage);
  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.wish.WishList || []);
  const pageInfo = useSelector((state) => state.wish.pageInfo);

  const filterWishList = wishList.filter((item) => item.wish === "Y");
  console.log("filter", filterWishList);

  console.log("pageinfo:", pageInfo);
  console.log("wishlist:", wishList);

  const getWishList = (currentPage) => {
    console.log("currentpage", currentPage);
    dispatch(wishActions.getWishList(currentPage));
  };

  useEffect(() => {
    // getinfo();
    getWishList(currentPage);
  }, []);

  return (
    <>
      <div id="wishContainer">
        <div className="wishTitle">
          <h3>내가 찜한 목록</h3>
          <div className="line" />
        </div>

        <div className="movieContainer">
          {filterWishList &&
            filterWishList.map((wish) => (
              <div className="movie" key={wish.idx}>
                <img src={wish.poster}></img>
              </div>
            ))}
        </div>

        <div className="pagination">
          {pageInfo && <WishPagination getWishList={getWishList} />}
        </div>
      </div>
    </>
  );
};

export default Wish;
