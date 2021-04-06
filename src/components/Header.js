import React, {useEffect , Component } from 'react';
import Dot from './../assets/images/doticon.svg';
import Logo from './../assets/images/CYBERcare.png';
const Header = (props) =>  {
        return (
            <div>
                <header>
                    <div className="wrap container-fluid">
                        <div className="left">
                            <a href="/"><img src={Logo} alt="" /></a>
                            <h1 className="hidden">CyberCare</h1>
                            <ul className="menu">
                            <li><a href="/#">Người <br />lao động</a></li>
                            <li><a href="/#">Đơn vị</a></li>
                            <li><a href="/#">Tra cứu</a></li>
                            <li><a href="/#">Phòng ban</a></li>
                            <li><a href="/#">Nhật ký <br />hoạt động</a></li>
                            <li className="qltk"><a href="/#">Quản lý tài khoản</a></li>
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