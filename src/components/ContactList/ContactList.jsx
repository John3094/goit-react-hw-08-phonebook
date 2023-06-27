import { Container, Item, Button, List, ButtonText } from './ContactListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filterList = useSelector(filteredContacts);
  return (
    <Container>
      <List>
        {filterList.map(filterItem => (
          <Item key={filterItem.id}>
            {filterItem.name}: {filterItem.number}
            <Button onClick={() => dispatch(deleteContact(filterItem.id))}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </Item>
        ))}
      </List>
    </Container>
  );
};
