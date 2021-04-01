import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import { auth, GoogleProvider, GitHubProvider } from '../firebase'

const Login = () => {

  const handleLoginGoogle = () => {
    auth.signInWithPopup(GoogleProvider)
  }
  const handleLoginGitHub = () => {
    auth.signInWithPopup(GitHubProvider)
  }


  return (
    <Container>
      <img src="/carpeta.png" alt="" />
      <Parrafo>
        <p> Bienvenido a DevJobs</p>
        <p>DevJobs es una plataforma de empleo especializada en desarrolladores de software.</p>
      </Parrafo>
      <ContainerForm>
        <ButtonSubmit
          onClick={handleLoginGoogle}
          variant="contained"
          color="primary">
          <AvatarGoogle src={'/buscar.svg'} />
            Google
        </ButtonSubmit>

        <ButtonSubmit
          onClick={handleLoginGitHub}
          variant="contained"
          color="secondary">
          <AvatarGit />
            GitHub
        </ButtonSubmit>
      </ContainerForm>
    </Container >
  )
}

export default Login

const ButtonSubmit = styled(Button)`
  width: 100%;
  :first-child{
    margin-bottom: 15px;
  }
`
const AvatarGit = styled(GitHubIcon)`
  width: 25px;
  position: relative;
  left: -10px;  
`
const AvatarGoogle = styled.img`
  width: 25px;
  position: relative;
  left: -10px;   
`

const ContainerForm = styled.form`
  width: 250px;
  z-index: 1;
`

const Parrafo = styled.div`
     margin-top: 15px;
     margin:0;
     font-size: 1.1rem;
     width: 300px;
     text-align: center;
     p:first-child{
       font-size: 1.5rem;
       font-weight: bold;
     }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  > img{
    width: 70px;
    margin-bottom:15px;
  }
`

