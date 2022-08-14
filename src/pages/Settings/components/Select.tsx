import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import arrow from '../../../images/arrow.svg'

const options = ['easy', 'medium', 'hard']

type openedProp = {
  opened: boolean
}

const Root = styled.div`
  position: relative;
  width: 215px;
  z-index: 10;
`
const Legend = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.gray};
  margin: 0;
  margin-bottom: 5px;
`
const SelectWrapper = styled.div`
  background: #f8f8f8;
  border: 1px solid #ececec;
  border-radius: 9px;
  height: 50px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`
const SelectText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.black};
  text-transform: capitalize;
  margin-right: 35px;
`
const SelectIcon = styled.img<openedProp>`
  margin-left: auto;
  transform: ${({ opened }) => (opened ? 'rotateX(180deg)' : 'rotateX(0deg)')};
  transition: 0.3s transform;
`
const Menu = styled.div<{ opened: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  transform: ${({ opened }) => (opened ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: 0.3s transform;
  width: 100%;
  background: #f8f8f8;
  border: 1px solid #ececec;
  border-radius: 9px;
  padding: 18px 23px;
`
const Option = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.palette.gray : theme.palette.black};
  border: none;
  outline: none;
  background: none;
  text-align: left;
  text-transform: capitalize;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 9px;
  transition: 0.3s color;
  &:not(:last-of-type) {
    border-bottom: 1px solid #dadada;
  }
`

const Select = () => {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(options[0])
  const RootRef = useRef<HTMLDivElement>(null)

  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    setOpened(false)
    setSelected(e.currentTarget.value)
  }

  const handleSelectClick = () => setOpened((opened) => !opened)

  const ClickOutsideHandler = useCallback((e: globalThis.MouseEvent) => {
    const path = e.composedPath && e.composedPath()
    if (RootRef.current && !path.includes(RootRef.current)) {
      setOpened(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', ClickOutsideHandler)

    return () => window.removeEventListener('click', ClickOutsideHandler)
  }, [ClickOutsideHandler])

  return (
    <Root ref={RootRef}>
      <Legend>Difficulty</Legend>
      <SelectWrapper onClick={handleSelectClick}>
        <SelectText>{selected}</SelectText>
        <SelectIcon opened={opened} src={arrow} alt="Arrow Icon" />
      </SelectWrapper>
      <Menu opened={opened}>
        {options.map((option) => (
          <Option
            key={option}
            onClick={handleSelect}
            disabled={selected === option}
            value={option}
          >
            {option}
          </Option>
        ))}
      </Menu>
    </Root>
  )
}

export default Select
