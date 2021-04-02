import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
      <BottomDashboard to="/profile/create-job">
        <Button variant="contained" color="primary" >Publicar Empleo</Button>
      </BottomDashboard>
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
  padding: 15px;
  height: 100vh;
`
const BottomDashboard = styled(Link)`
  text-decoration: none;
`