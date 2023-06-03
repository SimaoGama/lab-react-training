const Greetings = ({ lang, children }) => {
  let greetings = '';

  switch (lang) {
    case 'en':
      greetings = 'Hola ' + children;
      break;
    case 'fr':
      greetings = 'Bonjour ' + children;
      break;
    case 'de':
      greetings = 'Hallo ' + children;
      break;
    case 'es':
      greetings = 'Hola ' + children;
      break;
    default:
      return 'error';
  }

  return (
    <div className="card bg-light">
      <div className="row">
        <div className="col">{greetings}</div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Greetings;
