import { Item, Button } from './ContactListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterList = useSelector(filteredContacts);
  return (
    <ul>
      {filterList.map(filterItem => (
        <Item key={filterItem.id}>
          {filterItem.name}: {filterItem.phone}
          <Button onClick={() => dispatch(deleteContact(filterItem.id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};
