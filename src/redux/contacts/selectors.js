export const selectContacts = ({ contacts: { items } }) => items;
export const selectFilter = ({ filter }) => filter;

export const filteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
