import {Fragment} from "react";
import {Container} from "react-bootstrap";


const FooterComponent = () => {
    return (
        <Fragment>
            <div className="container mt-5">

                <footer className="text-black text-center text-lg-start bg-white">

                    <div className="container p-4">

                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Sobre o Casal</h5>

                                <p>
                                    Yasmin e Rafael se conheceram em 10/12/2017, e desde então não se separaram mais.
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
                                <h3>Informações do evento</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Av. Água Fria, 1608 - 02332-001</li>
                                    <li className="list-group-item">Outubro - 21/10/2023</li>
                                    <li className="list-group-item">18:00 às 21:00</li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <Container>
                                    <footer className={"text-center text-xl-center bg-white footer"}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.59179456155!2d-46.62120694885336!3d-23.475184564227032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef65b3c15c91b%3A0x677d762df0a68a05!2sAv.%20%C3%81gua%20Fria%2C%201608%20-%20Tucuruvi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002332-001!5e0!3m2!1sen!2sbr!4v1674128392155!5m2!1sen!2sbr"
                                            style={{border: 0}} allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"/>
                                    </footer>
                                </Container>
                                {/*<h5 className="text-center text-uppercase my-4">Horário Evento</h5>*/}

                                {/*<table className="table text-center text-black">*/}
                                {/*    <tbody className="fw-normal">*/}
                                {/*    <tr>*/}
                                {/*        <td>Outubro - 21/10/2023</td>*/}
                                {/*        <td>18:00 às 21:00</td>*/}
                                {/*    </tr>*/}
                                {/*    </tbody>*/}
                                {/*</table>*/}
                            </div>

                        </div>

                    </div>

                    <div className="text-center p-3" style={{backgroundColor: 'rgba(240, 240, 240)'}}>
                        © 2023 Copyright:
                        <a className="text-black" href="/home">yasminrafael.com.br</a>
                    </div>

                </footer>

            </div>
        </Fragment>
    )
}

export default FooterComponent;
