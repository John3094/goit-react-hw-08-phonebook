import PropTypes from 'prop-types';
import { Item, Button } from './ContactListStyled';

export const ContactList = ({ filterList, onDelete }) => {
  return (
    <ul>
      {filterList.map(filterItem => (
        <Item key={filterItem.id}>
          {filterItem.name}: {filterItem.number}
          <Button onClick={() => onDelete(filterItem.id)}>Delete</Button>
        </Item>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
