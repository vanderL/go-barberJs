import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut(){
    dispatch(signOut());
  }
  
  return(
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome do completo"/>
        <Input name="email" type="email" placeholder="Seu melhor e-mail"/>

        <hr />

        <Input type="password" name="oldPassword" placeholder="Sua senha atual"/>
        <Input type="password" name="password" placeholder="Sua senha nova"/>
        <Input type="password" name="confirmPassword" placeholder="Confirme sua senha"/>
      
        <button type="submit">Atualizar perfil</button>
      
      </Form>

      <button type="button" onClick={handleSignOut} >Sair do GoBarber</button>
    </Container>
  )
}