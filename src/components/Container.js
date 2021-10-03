import PropTypes from 'prop-types';
import s from '../css/Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
