'use client';
import { useState } from 'react';

interface Register {
  name: string;
  email: string;
  password: string;
  error: string;
  success?: string;
  buttonText: string;
}

export const useRegisterForm = () => {
  const [state, setState] = useState<Register>({
    name: '',
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Register',
  });

  const { name, email, password, error, success, buttonText } = state;

  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [name]: e.target.value, error: '', success: '' });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, buttonText: 'Registering' });
    console.table({ name, email, password });
  };

  return {
    state,
    handleChange,
    handleSubmit,
  };
};
