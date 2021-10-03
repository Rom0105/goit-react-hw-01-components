import PropTypes from 'prop-types';
import s from '../css/TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <table className={s.container}>
      <thead className={s.items}>
        <tr>
          <th className={s.item}>Type</th>
          <th className={s.item}>Amount</th>
          <th className={s.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.wrapper} key={item.id}>
            <td className={s.element}>{item.type}</td>
            <td className={s.element}>{item.amount}</td>
            <td className={s.element}>{item.currency}</td>
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
