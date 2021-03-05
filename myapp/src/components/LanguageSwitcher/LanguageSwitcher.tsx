import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  return (
    <ul className="languageSwitcher">
      <li className="languageSwitcher__item">
        <button>RU</button>
      </li>
      <li className="languageSwitcher__item">
        <button>EN</button>
      </li>
      <li className="languageSwitcher__item">
        <button>JP</button>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
