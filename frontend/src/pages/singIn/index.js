import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

// import { Container } from './styles';


export default function singIn() {
  return (
    <>
      <img src={logo} alt="GoBarber"/>
      
      <form action="">
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha senha" />

        <button type="submit"> Acessar </button>
        <Link to="/register" > Criar conta gratuita </Link>
      </form>
    </>
  );
}