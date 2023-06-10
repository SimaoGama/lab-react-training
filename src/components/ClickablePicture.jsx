import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <img
        className="click-image"
        onClick={handleClick}
        src={clicked ? imgClicked : img}
        alt="error"
      />
    </div>
  );
};

export default ClickablePicture;
