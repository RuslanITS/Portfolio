import { useState } from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'RU' | 'EN'>('EN');

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-name">RUSLAN</span>
          <span className="header__logo-mark">炎</span>
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
          >
            <span>{language === 'EN' ? 'Home' : 'Главная'}</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
          >
            <span>{language === 'EN' ? 'Projects' : 'Проекты'}</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
          >
            <span>{language === 'EN' ? 'About' : 'Обо мне'}</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
          >
            <span>{language === 'EN' ? 'Contact' : 'Контакты'}</span>
          </NavLink>
        </nav>

        <div className="header__actions">
          <div className="header__language">
            <button
              className={language === 'RU' ? 'header__language-button header__language-button--active' : 'header__language-button'}
              type="button"
              onClick={() => setLanguage('RU')}
            >
              RU
            </button>
            <span>/</span>
            <button
              className={language === 'EN' ? 'header__language-button header__language-button--active' : 'header__language-button'}
              type="button"
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
          </div>

          <NavLink to="/contact" className="header__talk">
            <span>{language === 'EN' ? "Let's talk" : 'Связаться'}</span>
            <span className="header__talk-dot"></span>
          </NavLink>

          <button
            className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
            }
            onClick={closeMenu}
          >
            <span>{language === 'EN' ? 'Home' : 'Главная'}</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
            }
            onClick={closeMenu}
          >
            <span>{language === 'EN' ? 'Projects' : 'Проекты'}</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
            }
            onClick={closeMenu}
          >
            <span>{language === 'EN' ? 'About' : 'Обо мне'}</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
            }
            onClick={closeMenu}
          >
            <span>{language === 'EN' ? 'Contact' : 'Контакты'}</span>
          </NavLink>
        </nav>

        <div className="mobile-menu__footer">
          <div className="mobile-menu__language">
            <button
              className={language === 'RU' ? 'mobile-menu__language-button mobile-menu__language-button--active' : 'mobile-menu__language-button'}
              type="button"
              onClick={() => setLanguage('RU')}
            >
              RU
            </button>
            <span>/</span>
            <button
              className={language === 'EN' ? 'mobile-menu__language-button mobile-menu__language-button--active' : 'mobile-menu__language-button'}
              type="button"
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
          </div>

          <span className="mobile-menu__status">
            AVAILABLE FOR WORK
            <span></span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;