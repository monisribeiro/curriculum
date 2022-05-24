import './styles.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#profile">Monique R. Delbel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#links">Links</Nav.Link>
                        <Nav.Link href="#work">Work Experience</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#more">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
