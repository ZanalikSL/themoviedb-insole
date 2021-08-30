import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import logo from '../../assets/TMBD_primary_full.png'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          THE MOVIE DB - API
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created by: <a href='https://github.com/ZanalikSL'>Bruno Senna</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
