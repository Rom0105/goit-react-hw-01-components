import PropTypes from 'prop-types';
function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2>{title}</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label}</span>
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
