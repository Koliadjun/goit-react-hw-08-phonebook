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
  const { data } = await axios.post(`/users/signup`, formData);
  return data;
}

export async function logInUser(formData) {
  const { data } = await axios.post(`/users/login`, formData);
  return data;
}

export async function logOutUser() {
  const { data } = await axios.post(`/users/logout`);
  return data;
}

export async function refreshCurrUser() {
  const { data } = await axios.get(`/users/current`);
  return data;
}
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};