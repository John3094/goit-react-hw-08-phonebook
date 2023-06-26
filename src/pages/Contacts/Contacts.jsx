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

const Contacts = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (isLogin) dispatch(fetchContacts());
  }, [dispatch, isLogin]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
