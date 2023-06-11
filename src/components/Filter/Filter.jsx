import PropTypes from 'prop-types';
import { FilterName } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <FilterName>Find contacts by name</FilterName>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
