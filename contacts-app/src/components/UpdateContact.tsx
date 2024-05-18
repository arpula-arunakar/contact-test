// src/components/UpdateContact.tsx
import React from 'react';
import ContactForm from './ContactForm';
import { Contact } from '../types/Contact';

interface UpdateContactProps {
  contact: Contact;
  onUpdate: (contact: Contact) => void;
}

const UpdateContact = ({ contact, onUpdate }: UpdateContactProps) => {
  const handleSave = (updatedContact: Contact) => {
    onUpdate({ ...updatedContact, id: contact.id });
  };

  return (
    <div className="container">
      <h2>Update Contact</h2>
      <ContactForm initialContact={contact} onSave={handleSave} />
    </div>
  );
};

export default UpdateContact;
