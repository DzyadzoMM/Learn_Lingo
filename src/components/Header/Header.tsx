
import './Header.css';
import ukraineSvg from '../../assets/ukraine.svg';
import loginSvg from '../../assets/login.svg';

function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <a className="logo">
          <img 
            src={ukraineSvg} 
            alt="LearnLingo Logo" 
            width={20} 
            height={20} 
          />
          <span className="text_logo">LearnLingo</span>
        </a>
        
        <nav className="nav">
          <a className="nav-text">Home</a>
          <a className="nav-text">Teachers</a>
        </nav>
      </div>

      <div className="auth">
        <a className="login-link">
          <img 
            src={loginSvg} 
            alt="Log In" 
            width={12} 
            height={11} 
          />
          <span className="login-text">Log In</span>
        </a>
        
        <a className="register-btn">
          Registration
        </a>
      </div>
    </header>
  );
};

export default Header;