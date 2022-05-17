import './style.css';
import menu from "../../assets/menu_icon_white.png"

const NavButton = () => {
    let menuToggle = true;

    const handleNavButton = () => {
        let menuBox = document.querySelector(".menu-box");

        menuBox.classList.toggle('menu-disappear-animation');
        menuBox.classList.toggle('menu-appear-animation');
    };

    return (
        <div className='wrapper'>
            <div className='nav-button' onClick={ handleNavButton }>
                <img src={menu} alt="menu"></img>
            </div>
            <nav className='menu-box menu-appear-animation'>
                <ul className='menu-list'>
                    <li>
                        DSTI 소개
                    </li>
                    <li>
                        비즈니스
                    </li>
                    <li>
                        IT 솔루션
                    </li>
                    <li>
                        IT 인프라
                    </li>
                    <li>
                        데이터
                    </li>
                    <li>
                        R&D
                    </li>
                    <li>
                        고객지원
                    </li>
                    <li>
                        채용
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavButton;