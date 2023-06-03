const IdCard = (props) => {
  return (
    <div className="row">
      <div className="col">
        <div className="card text-center">
          <div className="card-body bg-light">
            <div className="col">
              <img src={props.picture} alt="" />
            </div>
            <h2>{props.firstName}</h2>
            <h2>{props.lastName}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Date of Birth: {props.birth}</p>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default IdCard;
