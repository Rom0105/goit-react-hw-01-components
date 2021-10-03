import PropTypes from 'prop-types';
import '../css/TransactionHistory.css';
function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead className="transaction-head">
        <tr>
          <th className="transaction-title">Type</th>
          <th className="transaction-title">Amount</th>
          <th className="transaction-title">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className="transaction-row" key={item.id}>
            <td className="transaction-cell">{item.type}</td>
            <td className="transaction-cell">{item.amount}</td>
            <td className="transaction-cell">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
