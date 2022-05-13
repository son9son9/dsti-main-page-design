import './style.css';
import menu from "../../assets/menu_icon_black.png"

const NavButton = () => {
    const handleNavButton = () => {
        let menuBox = document.querySelector(".menu-box");
        if (menuBox.style.display === 'none') {
            menuBox.style.display = 'block';
        } else {
            menuBox.style.display = 'none';
        }
    };

    return (
        <div className='wrapper'>
            <div className='nav-button' onClick={ handleNavButton }>
                <img src={menu} alt="menu"></img>
            </div>
            <div className='menu-box'>
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
            </div>
        </div>
    );
}

export default NavButton;