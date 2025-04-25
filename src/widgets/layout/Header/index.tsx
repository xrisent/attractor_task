import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header__nav">
          <a href="/profile" className="header__link">
            Profile
          </a>
        </nav>
      </div>
    </header>
  );
};
