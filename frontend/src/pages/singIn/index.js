import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Isira um e-mail válido')
    .required('O email é obrigatorio'),
  password: Yup.string().required('A senha é obrigatório'),
});

export default function singIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  
  return (
    <>
      <img src={logo} alt="GoBarber"/>
      
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" ype="password" placeholder="Sua senha senha" />

        <button type="submit"> Acessar </button>
        <Link to="/register" > Criar conta gratuita </Link>
      </Form>
    </>
  );
}