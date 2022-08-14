import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { getFromStorage, setToStorage } from '../../../services/storage'
import pen from '../../../images/pen.svg'

const InputWrapper = styled.div`
  display: flex;
`

const Input = styled.input`
  background: #f8f8f8;
  border: 1px solid #ececec;
  border-radius: 9px 0 0 9px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.black};
  outline: none;
  width: 410px;
  padding: 12px 20px;
  
  &::placeholder {
    color: ${({ theme }) => theme.palette.gray};
  }
`

const Button = styled.button`
  height: 60px;
  width: 60px;
  background: ${({ theme }) => theme.palette.violet};
  border: none;
  outline: none;
  border-radius: 0px 9px 9px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const NameInput = () => {
  const [name, setName] = React.useState(getFromStorage('name'))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
    
  const handleSave = () => name && setToStorage('name', name)

  return (
    <InputWrapper>
      <Input value={name} type="text" onChange={handleChange} placeholder="User name" />
      <Button onClick={handleSave}>
        <img src={pen} alt="pen" />
      </Button>
    </InputWrapper>
  )
}

export default NameInput
