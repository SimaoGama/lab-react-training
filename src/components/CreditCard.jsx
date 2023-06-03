import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/mastercard.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  function maskedNumber(number) {
    let string = String(number);
    let sliced = string.slice(-4);
    let mask = String(sliced).padStart(string.length, '*');
    return mask;
  }

  function cardLogo(type) {
    if (type === 'Visa') {
      return visa;
    } else {
      return masterCard;
    }
  }

  return (
    <div className="credit-card">
      <div className="row">
        <div className="col">
          <div
            className="card"
            style={{ backgroundColor: bgColor, color: color }}
          >
            <div className="card-body">
              {/*  <h5 className="card-title">{type}</h5> */}
              <img className="card-logo" src={cardLogo(type)} alt="" />

              <p className="card-text">{maskedNumber(number)}</p>

              <div className="row">
                <div className="col">
                  <p className="card-text">
                    <span className="expiration-label">Expires:</span>{' '}
                    {expirationMonth}/{expirationYear}
                  </p>
                </div>
                <div className="col">
                  <h4 className="card-text">{bank}</h4>
                </div>
              </div>

              <p className="card-text">{owner}</p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default CreditCard;
