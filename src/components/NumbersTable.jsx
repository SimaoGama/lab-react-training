const NumbersTable = ({ limit }) => {
  const numbersArray = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {numbersArray.map((number) => (
            <tr
              key={number}
              style={number % 2 === 0 ? { background: 'red' } : null}
            >
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default NumbersTable;
