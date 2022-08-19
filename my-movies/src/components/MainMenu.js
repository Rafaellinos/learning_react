import { MainMenuContainer } from "../styles/MainMenuContainer";
import { Link } from "react-router-dom";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>Sobre</li></Link>
        </ul>
    </MainMenuContainer>
);