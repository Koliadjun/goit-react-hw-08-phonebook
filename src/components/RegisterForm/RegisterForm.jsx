import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/authorization';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const currentTarget = e.currentTarget;

    switch (currentTarget.name) {
      case 'name': {
        setName(currentTarget.value);
        break;
      }
      case 'email': {
        setEmail(currentTarget.value);
        break;
      }
      case 'password': {
        setPassword(currentTarget.value);
        break;
      }
      default: {
        throw new Error('No such input!');
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.registerUser({ name, email, password }));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ім'я</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="name"
          type="text"
          placeholder="Введіль ім'я"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Введіль email"
        />
        <Form.Text className="text-muted">
          Ваш емаіл уже продано! Дякуємо!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="Пароль"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Зареєструватись
      </Button>
    </Form>
  );
}
