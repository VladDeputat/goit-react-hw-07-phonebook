import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ContactsList.module.scss';
import { getContacts, deleteContact } from '../../redux/operations';

class ContactsList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  handleDelete = e => {
    this.props.deleteContact(e.target.id);
  };

  render() {
    const { contacts } = this.props;
    return (
      <div className={styles.contactsBox}>
        <ul>
          {contacts.length > 0 &&
            contacts.map(contact => (
              <li className={styles.listItem} key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  type="button"
                  className={styles.btn}
                  onClick={this.handleDelete}
                  id={contact.id}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ contacts }) => {
  return {
    contacts: contacts.items.filter(item =>
      item.name.toLowerCase().includes(contacts.filter.toLowerCase()),
    ),
  };
};

export default connect(mapStateToProps, { deleteContact, getContacts })(
  ContactsList,
);
