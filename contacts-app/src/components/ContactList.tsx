import React from "react";
import { Contact } from "types/Contact";
import { Button, Table } from "react-bootstrap";
import Avatar from "./Avatar";
import PhoneNumber from 'assets/images/phone-call.png'
import Email from 'assets/images/email.png'

interface ContactListProps {
  contacts: Contact[];
  onEdit: (id: string | number | undefined) => void;
  onDelete: (id: string | number | undefined) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="contact-list-container">
      <ul className="contact-list-items">
        {contacts.map((contact, index) => (
          <li className="contact-list-item">
            <div className="contact-list-item-meta">
              <div className="contact-list-item-meta-avatar">
                <span className="contact-avatar contact-avatar-circle contact-avatar-image css-var-rdj contact-avatar-css-var">
                  <Avatar
                    fullName={contact.firstName + " " + contact.lastName}
                  />
                </span>
              </div>
              <div className="contact-list-item-meta-content">
                <h4 className="contact-list-item-meta-title">
                  {contact.firstName} {contact.lastName}
                </h4>
                <span>{contact.message ? contact.message : "-"}</span>
              </div>
            </div>
            <div className="contact-list-item-meta-contact">
              <img src={PhoneNumber} width={20} title={contact.mobile} />
              <img src={Email}  width={20} title={contact.email} />
            </div>
            <ul className="contact-list-item-action">
              <li>
                <a onClick={() => onEdit(contact.id)} title="Edit">Edit</a>
                <em className="contact-list-item-action-split"></em>
              </li>
              <li>
                <a onClick={() => onDelete(contact.id)} title="Delete">Delete</a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
