import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    console.log(data);
  }
  
  return(
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do completo"/>
        <Input name="email" type="email" placeholder="Seu melhor e-mail"/>

        <hr />

        <Input type="password" name="oldPassword" placeholder="Sua senha atual"/>
        <Input type="password" name="password" placeholder="Sua senha nova"/>
        <Input type="password" name="confirmPassword" placeholder="Confirme sua senha"/>
      
        <button type="submit">Atualizar perfil</button>
      
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  )
}