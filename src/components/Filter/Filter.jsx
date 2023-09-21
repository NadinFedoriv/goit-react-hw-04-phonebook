import PropTypes from 'prop-types';
import './Filter.scss';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className="filter"
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
