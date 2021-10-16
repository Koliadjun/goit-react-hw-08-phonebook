import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// axios.defaults.baseURL = 'https://contacts-json-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts/`, contact);
  return data;
}
export async function deleteContactById(contactId) {
  await axios.delete(`/contacts/${contactId}`);
}

export async function registerUser(formData) {
  await axios.post(`/users/signup`, formData);
}

export async function logInUser(formData) {
  await axios.post(`/users/login`, formData);
}

export async function logOutUser() {
  await axios.post(`/users/logout`);
}

export async function refreshCurrUser() {
  await axios.get(`/users/logout`);
}