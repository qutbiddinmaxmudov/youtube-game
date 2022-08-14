import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../App'
import { Button } from '../../components/Button'
import Menu from '../../components/Menu'
import MenuTitle from '../../components/MenuTitle'
import Navbar from '../../components/Navbar'
import NameInput from './components/NameInput'
import Select from './components/Select'
import Switch from './components/Switch'

const OptionsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const SwitchOptions = styled.div`
  margin-left: 35px;
`

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`

const OptionText = styled.p<{ disabled: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray : theme.text.secondary};
`

const Settings = () => {
  const [theme, setTheme] = useState(true)
  const appContext = useContext(AppContext)
  return (
    <div>
      <Navbar title="Memory Game" />
      <Menu>
        <MenuTitle>Settings</MenuTitle>
        <NameInput />
        <OptionsWrapper>
          <Select />
          <SwitchOptions>
            <Option>
              <OptionText disabled={false}>Rus</OptionText>
              <Switch checked={theme} onCheck={setTheme} />
              <OptionText disabled={false}>Eng</OptionText>
            </Option>
            <Option>
              <OptionText disabled={false}>Light</OptionText>
              <Switch checked={appContext?.darkThemeOn} onCheck={appContext?.setDarkThemeOn} />
              <OptionText disabled={false}>Dark</OptionText>
            </Option>
          </SwitchOptions>
        </OptionsWrapper>
        <Button
          as={Link}
          to="/"
          width="370px"
          style={{
            marginTop: '20px',
          }}
        >
          Back
        </Button>
      </Menu>
    </div>
  )
}

export default Settings
