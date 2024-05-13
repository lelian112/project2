import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { movieActions } from "../toolkit/actions/movie_action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import LoginModal from "../components/LoginModal";

const StarContainer = styled.div`
  position: relative;
  font-size: 2rem;
  color: #ddd;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const StarInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const StarSpan = styled.span`
  width: ${({ rating }) => `${rating * 20}%`};
  position: absolute;
  left: 0;
  color: rgb(255, 47, 110);
  overflow: hidden;
  pointer-events: none;
`;

const StarRating = ({ star }) => {
  //modal
  const [showModal, setShowModal] = useState(false);
  const handleModalCancel = () => {
    setShowModal(false);
  };

  const { code } = useParams();
  console.log("codeee", code);
  const user_id = localStorage.getItem("id");

  const dispatch = useDispatch();
  const [rating, setRating] = useState(star);

  let rateInput = rating;
  useEffect(() => {}, [rateInput]);
  console.log(rateInput);

  const handleRatingChange = async (e) => {
    if (!user_id) {
      setShowModal(true);
      return;
    }

    e.preventDefault();
    setRating(() => e.target.value);

    console.log("e.target.value", e.target.value);

    // setRating((prev) => {
    //   return { ...prev, [e.target.name]: e.target.value };
    // });

    rateInput = e.target.value;
    console.log("rating", rating);
    console.log("rateInput", rateInput);

    const formData = {
      user_id: user_id,
      movie_code: code,
      rate: e.target.value,
    };

    console.log("formData", formData);

    await dispatch(movieActions.getAddMovieUserRate(formData));
    // window.location.reload();
  };

  return (
    <StarContainer>
      ★★★★★
      <StarSpan rating={rating}>★★★★★</StarSpan>
      <StarInput
        type='range'
        value={rating}
        onChange={handleRatingChange}
        step='0.5'
        min='0'
        max='5'
      />
    </StarContainer>
  );
};

export default StarRating;
