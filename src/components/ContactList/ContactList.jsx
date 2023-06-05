import { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactListStyled';

export class ContactList extends Component {
  render() {
    const filterContacts = this.props.filterList;
    const contactDelete = this.props.onDelete;
    return (
      <ul>
        {filterContacts.map(filterContact => (
          <Item key={filterContact.id}>
            {filterContact.name}: {filterContact.number}
            <Button onClick={() => contactDelete(filterContact.id)}>
              Delete
            </Button>
          </Item>
        ))}
      </ul>
    );
  }
}

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
