const Random = ({ min, max }) => {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div>
      <p>{getRandom(min, max)}</p>
    </div>
  );
};

export default Random;
