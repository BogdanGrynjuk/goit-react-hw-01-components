import PropTypes from 'prop-types';
import css from './TaskTitle.module.css';

export const TaskTitle = ({ title }) => {
  return (<h2 className={css.title}>{ title }</h2>)
}

TaskTitle.propTypes = {
  title: PropTypes.string.isRequired,
}