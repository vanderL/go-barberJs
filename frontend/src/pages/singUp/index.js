import React from 'react';


import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import { singUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string('Isira um nome')
    .required('Nome é obrigatorio'),
  email: Yup.string()
    .email('Isira um e-mail válido')
    .required('O email é obrigatorio'),

    password: Yup.string().min(6, 'Minimo 6 caracteres').required('A senha é obrigatório'),
  });


export default function SingUp() {
  const dispatch =  useDispatch();
  
  function handleSubmit({ name, email, password }) {
    dispatch(singUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit"> Criar conta </button>
        <Link to="/"> Já tenho login </Link>
      </Form>
    </>
  )
}