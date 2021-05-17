import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

// import { Container } from './styles';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit"> Criar conta </button>
        <Link> Já tenho login </Link>
      </form>
    </>
  )
}