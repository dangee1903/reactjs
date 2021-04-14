import React from 'react';
import Dot from './../assets/images/doticon.svg';
import Logo from './../assets/images/CYBERcare.png';
import {
    BrowserRouter as Router,
    useRouteMatch,
    Link
} from "react-router-dom";
const Header = (props) =>  {
    const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {
        let match = useRouteMatch({
            path: to,
            exact: activeOnlyWhenExact
        });
        return (
        <li className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
        </li>
        );
    }
    return (
        <div>
            <header>
                <div className="wrap container-fluid">
                    <div className="left">
                        <Link to="/"><img src={Logo} alt="" /></Link>
                        <h1 className="hidden">CyberCare</h1>
                        <ul className="menu">
                            <OldSchoolMenuLink
                                activeOnlyWhenExact={true}
                                to="/thutuc"
                                label="Thủ tục"
                            />
                        </ul>
                    </div>
                    <div className="user right">
                        <div className="img">
                            <img src={Logo} alt="" />
                        </div>
                        <p>Nguyễn Hải Đăng</p>
                        <img src={Dot} alt="" />
                    </div>
                    <button className="hamburger"><span /></button>
                </div>
            </header>
        </div>
    );
}

export default Header;