const BoxColor = ({ r, g, b }) => {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  r = getRandom(0, 255);
  g = getRandom(0, 255);
  b = getRandom(0, 255);

  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div>
      <div className="card" style={{ backgroundColor }}>
        <div className="card-body">#{(r, g, b)}</div>
      </div>
    </div>
  );
};

export default BoxColor;
