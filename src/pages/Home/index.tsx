import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import Menu from '../../components/Menu'
import MenuTitle from '../../components/MenuTitle'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar title="Memory Game" />
      <Menu>
        <MenuTitle>Start the game</MenuTitle>
        <Button width="370px">Start</Button>
        <Button
          to={'settings'}
          as={Link}
          width="370px"
          style={{
            marginTop: '20px',
          }}
        >
          Settings
        </Button>
      </Menu>
    </div>
  )
}

export default Home
