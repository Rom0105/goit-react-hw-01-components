import PropTypes from 'prop-types';
import '../css/Statistics.css';
function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="text">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="stat-li">
            <span className="stat-span">{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
