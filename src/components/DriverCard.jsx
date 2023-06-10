import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  const { licencePlate, model } = car;
  return (
    <div className="card">
      <div className="col">
        <p className="card-text"> {name} </p>
        <Rating rating={Math.round(rating)}> {rating} </Rating>
        <p className="card-text"> {rating} </p>
        <img src={img} height={'150px'} alt="" />
        <p className="card-text"> {model} </p>
        <p className="card-text"> {licencePlate} </p>
      </div>
      <div className="col">
        <h4 className="card-text"></h4>
      </div>
    </div>
  );
};

export default DriverCard;
