import { Contact } from "../types/Contact";
import axios from "axios";

const API_BASE_URL = "https://localhost:44305/api";

export const fetchContactById = async (
  id: string | number | undefined
): Promise<Contact | null> => {
  try {
    const response = await axios.get<Contact>(`${API_BASE_URL}/contact/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contact details:", error);
    return null; 
  }
};

export const addContact = async (payload: Contact): Promise<Contact> => {
  try {
    const result =  await axios.post(`${API_BASE_URL}/contact`, payload);
    return result.data;
  } catch (error) {
    console.error(`Error while creating contact:`, error);
    throw error;
  }
};
export const updateContact = async (payload: Contact): Promise<Contact> => {
  try {
    const result = await axios.put(`${API_BASE_URL}/contact`, payload);
    return result.data;
  } catch (error) {
    console.error(`Error while updating contact:`, error);
    throw error; 
  }
};
export const fetchContacts = async (): Promise<Contact[]> => {
  try {
    const response = await axios.get<Contact[]>(`${API_BASE_URL}/contact`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const deleteContact = async (
  id: string | number | undefined
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/contact/${id}`);
  } catch (error) {
    console.error(`Error deleting contact with ID ${id}:`, error);
    throw error; 
  }
};
