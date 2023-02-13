import {Container, Image, Nav, Navbar} from "react-bootstrap";
import './styles.css';
import MainWeddingPic from '../assets/casamento.png';

const Home = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Bem Vindo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Local da Festa</Nav.Link>
                            <Nav.Link href="mailto:rafael.veloso.lino@hotmail.com?subject=Confirmção de Presença">Confirmar Presença</Nav.Link>
                            <Nav.Link href="#link">Regras</Nav.Link>
                            <Nav.Link href="#contagem-regressiga">Contagem Regressiva</Nav.Link>
                            <Nav.Link href="#lista-presentes">Lista de Presentes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div className={"text-center my-5"}>
                    <Image
                        src={MainWeddingPic}
                        alt={"Yasmin and Rafael picture"}
                        className={"img-fluid rounded"}
                    />
                </div>
            </Container>
        </Container>
    )
}

export default Home;