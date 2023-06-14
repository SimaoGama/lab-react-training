import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
    setNationality('en');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(e.target.checkValidity());
  };

  const handlePassword = (e) => {
    const mediumRegex = new RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    );
    const enteredPassword = e.target.value;
    setPassword(e.target.value);
    setIsPasswordValid(mediumRegex.test(enteredPassword));
  };

  const handleSelect = (e) => {
    setNationality(e.target.value);
  };

  const greetings = () => {
    return `Your email address is ${email} `;
  };

  return (
    <>
      <h1 className="text-center">Signup Form</h1>

      <form noValidate className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            className={`form-control ${
              email && !isEmailValid ? 'is-invalid' : email && 'is-valid'
            }`}
            value={email}
            type="email"
            onChange={handleEmail}
            typeof="email"
            required // Basic HTML5 validation
          />
          {email &&
            (isEmailValid ? (
              <div className="valid-feedback">
                You typed a valid email address.
              </div>
            ) : (
              <div className="invalid-feedback">
                You typed an invalid email address.
              </div>
            ))}
        </div>
        <br />
        <div className="form-group">
          <label>Password:</label>
          <input
            className={`form-control ${
              password && !isPasswordValid
                ? 'is-invalid'
                : password && 'is-valid'
            }`}
            value={password}
            type="password"
            onChange={handlePassword}
            typeof="password"
          />
          {password &&
            (isPasswordValid ? (
              <div className="valid-feedback">Your password is strong.</div>
            ) : (
              <div className="invalid-feedback">Your password is too weak.</div>
            ))}
        </div>
        <br />
        <select
          className="custom-select custom-select-lg mb-3"
          value={nationality}
          onChange={handleSelect}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <br />
        <br />
        <div className="text-center">
          {email && (
            <>
              {nationality === 'en' ? (
                <h2>Hello</h2>
              ) : nationality === 'de' ? (
                <h2>Hallo</h2>
              ) : (
                <h2>Bonjour</h2>
              )}
              <div>{greetings()}</div>
            </>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </>
  );
};

export default SignupPage;
