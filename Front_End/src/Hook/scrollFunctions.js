// export const scrollLeft = (ref) => {
//   ref.current.scrollBy({
//     left: -300, // 스크롤 이동 거리 조정
//     behavior: "smooth", // 부드러운 스크롤 적용
//   });
// };

// export const scrollRight = (ref) => {
//   ref.current.scrollBy({
//     left: 300, // 스크롤 이동 거리 조정
//     behavior: "smooth", // 부드러운 스크롤 적용
//   });
// };

// export const movieListRef = useRef(null);

export const scrollLeft = (ref) => {
  ref.current.scrollBy({
    left: -1320, // 스크롤 이동 거리 조정
    behavior: "smooth", // 부드러운 스크롤 적용
  });
};

export const scrollRight = (ref) => {
  ref.current.scrollBy({
    left: 1320, // 스크롤 이동 거리 조정
    behavior: "smooth", // 부드러운 스크롤 적용
  });
};
