import './LanguageSwitcher.scss';

const LanguageSwitcher: React.FC = () => {
  return (
    <ul className="languageSwitcher">
      <li className="languageSwitcher__item">
        <button type="button">RU</button>
      </li>
      <li className="languageSwitcher__item">
        <button type="button">EN</button>
      </li>
      <li className="languageSwitcher__item">
        <button type="button">JP</button>
      </li>
    </ul>
  );
};

export default LanguageSwitcher;
