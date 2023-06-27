import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Triangle } from 'react-loader-spinner';
import {
  ContainerContacts,
  Container,
  TitleBook,
  TitleList,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerContacts>
      <Container>
        <TitleBook>Phonebook</TitleBook>
        {error && <p>{error}</p>}
        <ContactForm />
        <TitleList>Contacts</TitleList>
        <Filter />
        {isLoading && <Triangle height="100" width="100" color="#FF99B3" />}
        <ContactList />
      </Container>
    </ContainerContacts>
  );
};

export default Contacts;
