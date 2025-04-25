import { useNavigate } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <div className="container">
        <nav className="header__nav">
          <ul>
            <li onClick={()=>navigate('/')}>Профиль</li>
            <li onClick={()=>navigate('/')}>Репозитории</li>
            <li onClick={()=>navigate('/')}>Другие пользователи</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
