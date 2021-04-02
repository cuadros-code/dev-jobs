import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import styled from 'styled-components'
import { FormControl } from '@material-ui/core'



const CreateJob = () => {

  return (
    <Container>
      <CompanyInformation>
        <InputField id="standard-basic" label="Nombre Empresa*" />
        <InputField type="url" id="standard-basic" label="Link Empresa*" />
        <InputField type="email" id="standard-basic" label="Correo Empresa*" />
        <InputField id="standard-basic" label="Titulo Empleo*" />
        <InputField id="standard-basic" label="Ubicación*" />
        <InputField type="number" id="standard-basic" label="Salario*" />


        <InputSelect >
          <InputLabel id="demo-simple-select-outlined-label">Remoto</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </InputSelect>

      </CompanyInformation>
    </Container>
  )
}

export default CreateJob

const InputField = styled(TextField)`
  width: 90%;
  margin-bottom: 15px;
`
const InputSelect = styled(FormControl)`
  width: 90%;
  margin-bottom: 15px;
`

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CompanyInformation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;

  @media (max-width: 480px){
  width: 350px;
  }


`
