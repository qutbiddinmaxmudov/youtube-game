import styled from 'styled-components'

const Menu = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  width: 870px;
  border-radius: 24px;
  padding: 80px 0 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 130px;
`

export default Menu
