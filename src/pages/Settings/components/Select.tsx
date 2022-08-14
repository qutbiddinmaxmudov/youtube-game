import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../../../images/arrow.svg'

const options = ['easy', 'medium', 'hard']

type openedProp = {
  opened: boolean
}

const Root = styled.div``
const Legend = styled.p``
const SelectWrapper = styled.div``
const SelectText = styled.p``
const SelectIcon = styled.img<openedProp>``
const Menu = styled.div<{ opened: boolean }>``
const Option = styled.button``

const Select = () => {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(options[0])
  return (
    <Root>
      <Legend>Difficulty</Legend>
      <SelectWrapper>
        <SelectText>{selected}</SelectText>
        <SelectIcon opened={opened} src={arrow} alt="Arrow Icon" />
      </SelectWrapper>
      <Menu opened={opened}>
        {options.map((option) => (
          <Option>{option}</Option>
        ))}
      </Menu>
    </Root>
  )
}

export default Select
