import './style.css';
import menu from "../../assets/menu_icon_black.png"

const NavButton = () => {
    return (
        <div className='wrapper'>
            <div className='nav-button'>
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