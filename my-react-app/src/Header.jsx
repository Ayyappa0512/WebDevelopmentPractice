import React from "react";

function Header() {
    const menuIcon = "M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
    return (
        <div className="header">
                <header>
                <nav className="primary">
                    <div>
                    <a href="none" className="logo">
                        <svg>
                            <path d ={menuIcon}/>
                        </svg>
                    </a>
                    <ul>
                        <li>Live</li>
                        <li>Push</li>
                        <li>Move</li>
                        <li>Note</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Shop</li>
                        <li>Shop</li>
                        <li>Packs</li>
                        <li>Help</li>
                        <li className="more_btn">More +</li>
                        <li className="liveclass">Try 12 for free</li>
                        <li className="login">Login or register</li>
                    </ul>
                    </div>
                </nav>
                <nav className="secondary">
                    <ul>
                        <li className="about">About</li>
                        <li>Jobs</li>
                        <li>Appereticeship</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;