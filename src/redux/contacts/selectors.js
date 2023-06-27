export const selectContacts = ({ contacts: { contacts } }) => contacts;
export const selectFilter = ({ filter }) => filter;
export const selectIsLoading = ({ contacts: { isLoading } }) => isLoading;
export const selectError = ({ contacts: { error } }) => error;

export const filteredContacts = ({ contacts: { contacts }, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
