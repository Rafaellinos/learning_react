import {Outlet} from "react-router-dom";
import {Fragment} from "react";
import {Container} from "react-bootstrap";
import FooterComponent from "./footer.component";

const Header = () => {
    return (
        <Fragment>
            <Container className="bg-white">
                <h1 className="main-header">Yasmin & Rafael</h1>
            </Container>
            <Outlet/>
            <FooterComponent/>
        </Fragment>

    );
}

export default Header;