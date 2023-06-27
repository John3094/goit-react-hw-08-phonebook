import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
// import { Container } from './AppStyled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from '../../components/Loader/Loader';
import {
  ContainerContacts,
  Container,
  TitleBook,
  TitleList,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (isLogin) dispatch(fetchContacts());
  }, [dispatch, isLogin]);

  return (
    <ContainerContacts>
      <Container>
        <TitleBook>Phonebook</TitleBook>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        <ContactForm />
        <TitleList>Contacts</TitleList>
        <Filter />
        <ContactList />
      </Container>
    </ContainerContacts>
  );
};

export default Contacts;
