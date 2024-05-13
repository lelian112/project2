import React, { useState, useEffect } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    fetch('/image')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      });
  }, []);

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Word Cloud" />}
    </div>
  );
}

export default App;
