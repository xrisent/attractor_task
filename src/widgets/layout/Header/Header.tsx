import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { logout } from "@/app/store/auth/authSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header>
      <div className="container">
        <nav className="header__nav">
          <ul>
            <li onClick={()=>navigate('/')}>Профиль</li>
            <li onClick={()=>navigate('/repositories')}>Репозитории</li>
            <li onClick={()=>navigate('/users')}>Другие пользователи</li>
            <li onClick={handleLogout}>Выйти</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
