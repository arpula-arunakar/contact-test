import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Contact } from '../types/Contact';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ContactFormProps {
    initialContact?: Contact | any;
    onSave: (contact: Contact) => void;
}

const validate = (values: Contact) => {
    const errors: Partial<Contact> = {};


    if (!values.firstName) {
        errors.firstName = 'First Name is required';
    }
    if (!values.lastName) {
        errors.lastName = 'Last Name is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.mobile) {
        errors.mobile = 'Mobile is required';
    } else if (!/^[0-9]{10}$/.test(values.mobile)) {
        errors.mobile = 'Mobile must be a valid number';
    }
  
    return errors;
};

const ContactForm = ({ initialContact, onSave }: ContactFormProps) => {
    console.log("PROPS CONT",initialContact);
    const navigate=useNavigate();

    const cancelForm =()=>{
        navigate('/contact');
    }

    return (
        <Formik
            initialValues={{
                firstName: initialContact?.firstName || '',
                lastName: initialContact?.lastName || '',
                mobile: initialContact?.mobile || '',
                email: initialContact?.email || '',
                message: initialContact?.message || '',
            }}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
                onSave(values);
                setSubmitting(false);
            }}
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <Field type="text" id="firstName" name="firstName" className="form-control" />
                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" className="form-control" />
                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <Field type="text" id="mobile" name="mobile" className="form-control" />
                    <ErrorMessage name="mobile" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <Field as="textarea" id="message" name="message" className="form-control" />
                    <ErrorMessage name="message" component="div" className="text-danger" />
                </div>
                <Button variant="primary" className="btn-custom-primary float-end mt-3" type="submit">{initialContact ?'Update':'Save'}</Button>
                <Button variant="outline-secondary" className="float-end mt-3 me-2" onClick={()=>cancelForm()}>Cancel</Button>
            </Form>
        </Formik>
    );
};

export default ContactForm;