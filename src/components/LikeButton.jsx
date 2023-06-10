import { useState } from 'react';

const LikeButton = () => {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');

  const handleLikes1 = () => {
    setLikes1((prev) => prev + 1);
    setColor1((prevColor) =>
      prevColor === ''
        ? 'red'
        : prevColor === 'red'
        ? 'orange'
        : prevColor === 'orange'
        ? 'yellow'
        : prevColor === 'yellow'
        ? 'green'
        : prevColor === 'green'
        ? 'blue'
        : prevColor === 'blue'
        ? 'red'
        : prevColor === 'blue'
    );
  };

  const handleLikes2 = () => {
    setLikes2((prev) => prev + 1);
    setColor2((prevColor) =>
      prevColor === ''
        ? 'red'
        : prevColor === 'red'
        ? 'orange'
        : prevColor === 'orange'
        ? 'yellow'
        : prevColor === 'yellow'
        ? 'green'
        : prevColor === 'green'
        ? 'blue'
        : prevColor === 'blue'
        ? 'red'
        : prevColor === 'blue'
    );
  };

  return (
    <div>
      <button style={{ backgroundColor: color1 }} onClick={handleLikes1}>
        {likes1} Likes
      </button>
      <button style={{ backgroundColor: color2 }} onClick={handleLikes2}>
        {likes2} Likes
      </button>
    </div>
  );
};

export default LikeButton;
