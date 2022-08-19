import { Fragment } from "react";
import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu";
import { Outlet } from "react-router-dom";

export const Header = () => (
    <Fragment>
        <HeaderContainer>
            <h1>My Movies</h1>
            <MainMenu />
        </HeaderContainer>
        <Outlet />
    </Fragment> 
);