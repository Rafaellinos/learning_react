import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import './navigator.styles.scss';

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

const Navigator = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/auth">
                        SIGNIN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigator;