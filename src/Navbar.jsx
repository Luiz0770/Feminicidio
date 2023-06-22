import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <>
            <Navbar className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="../public/vite.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Feminicidio
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;
