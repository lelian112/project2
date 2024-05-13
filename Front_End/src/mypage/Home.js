import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // 이미지 엔드포인트에 GET 요청을 보냅니다.
    fetch("/image")
      .then((response) => {
        // 응답에서 이미지를 읽습니다.
        return response.blob();
      })
      .then((blob) => {
        // Blob을 URL로 변환하여 이미지를 표시합니다.
        setImageSrc(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  return (
    <>
      <div id='cloudContainer'>
        {/* 이미지를 표시합니다. */}
        {imageSrc && <img src={imageSrc} alt='Word Cloud' />}
      </div>
    </>
  );
};

export default Home;
