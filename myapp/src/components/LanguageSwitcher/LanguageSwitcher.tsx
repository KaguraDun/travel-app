import './LanguageSwitcher.scss';

const LanguageSwitcher: React.FC = () => {
  return (
    <select className="language-switcher">
      <option className="language-switcher__lang" value="ru">
        ru
      </option>
      <option className="language-switcher__lang" value="en">
        en
      </option>
      <option className="language-switcher__lang" value="jp">
        jp
      </option>
    </select>
  );
};

export default LanguageSwitcher;
