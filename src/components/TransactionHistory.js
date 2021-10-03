import PropTypes from 'prop-types';
import styles from '../css/TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.transactionHead}>
        <tr>
          <th className={styles.transactionTitle}>Type</th>
          <th className={styles.transactionTitle}>Amount</th>
          <th className={styles.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.transactionRow} key={item.id}>
            <td className={styles.transactionCell}>{item.type}</td>
            <td className={styles.transactionCell}>{item.amount}</td>
            <td className={styles.transactionCell}>{item.currency}</td>
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
