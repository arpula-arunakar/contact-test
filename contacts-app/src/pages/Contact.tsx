// src/pages/ContactPage.tsx

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import ContactList from '../components/ContactList';
import { Contact } from '../types/Contact';
import { fetchContacts, deleteContact } from 'services/contact';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch contacts when the component mounts
    fetchAllContacts();
  }, []);

  const fetchAllContacts = async () => {
    try {
      const fetchedContacts = await fetchContacts();
      setContacts(fetchedContacts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      // Handle error
    }
  };

  const handleDeleteContact = async (id: string | number | undefined) => {
    try {
      // Delete the contact with the specified ID
      await deleteContact(id);
      // Fetch updated list of contacts after deletion
      fetchAllContacts();
    } catch (error) {
      console.error(`Error deleting contact with ID ${id}:`, error);
    }
  };

  const handleEditContact = async (id: string | number | undefined) => {
    try {
        navigate(`/contact/${id}`);
    } catch (error) {
      console.error(`Error edit contact with ID ${id}:`, error);
    }
  }

  const handleAddContact = async () => {
    try {
        navigate('/contact/add');
    } catch (error) {
      console.error(`Error add contact page`, error);
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md={8}>
        <Row className='mb-2'>
        <Col xs={12} md={8} className='align-items-lg-start d-flex'>
        <span className='mb-3 header-title me-2'>Contact List</span>{ contacts.length > 0 && <span> <Badge bg="primary" className='badge-custom'>{contacts.length}</Badge> </span>}
        </Col>
        <Col xs={6} md={4} className='text-end'>
        <Button variant="primary" className='btn-custom-primary' onClick={handleAddContact}>Add Contact</Button>
        </Col>
      </Row>
          {loading ? (
            <p className='text-center mt-4'>Loading contacts...</p>
          ) : (
            <ContactList contacts={contacts} onDelete={handleDeleteContact} onEdit={handleEditContact} />
          )}
         
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
