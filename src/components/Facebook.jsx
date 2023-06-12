import { useState } from 'react';
import contacts from '../data/berlin.json';

const Facebook = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const countries = [...new Set(contacts.map((student) => student.country))];

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    console.log(country);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="container">
      <div>
        {countries.map((country) => (
          <button
            key={country}
            className={`btn btn-${
              selectedCountry === country ? 'primary' : 'light'
            }`}
            onClick={() => handleSelectCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((student) => (
            <tr
              style={{
                backgroundColor:
                  selectedCountry === student.country ? 'lightblue' : 'initial',
              }}
              key={student.firstName + student.img}
            >
              <td>
                <img
                  onClick={() => handleSelectContact(student)}
                  className="facebook"
                  src={student.img}
                  alt="profile"
                />
              </td>
              {selectedContact === student && (
                <tr>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.country}</td>
                  <td>{student.isStudent ? 'Student' : 'Teacher'}</td>
                </tr>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Facebook;
