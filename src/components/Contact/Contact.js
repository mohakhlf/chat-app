import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = (props) => (
    <div className="Contact">
        <img src={props.image} className="avatar" />
        <div>
            <p className="name">
                {props.name}
            </p>
            <div className="status">
                <div
                    className={props.online ? "status-online" : "status-offline"}
                ></div>
                <p className="status-text">{props.online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
