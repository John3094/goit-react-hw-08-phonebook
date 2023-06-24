import { FilterName } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <label>
      <FilterName>Find contacts by name</FilterName>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      ></input>
    </label>
  );
};
