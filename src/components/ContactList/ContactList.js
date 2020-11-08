import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import Contact from "../Contact/Contact";

const users = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
    }
];

const Contacts = users.map( (user, index) =>
    <Contact
        key={index}
        name={user.name}
        image={user.avatar}
        online={user.online}
    />
)

const ContactList = () => (
    <div className={styles.ContactList} data-testid="ContactList">
        {Contacts}
    </div>
);

ContactList.propTypes = {};

ContactList.defaultProps = {};

export default ContactList;
