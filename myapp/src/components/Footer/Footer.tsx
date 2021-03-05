import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ul className="authors">
        <li className="authors__item">
          <a href="https://github.com/PavelAsadchy">Pavel Asadchy</a>
        </li>
        <li className="authors__item">
          <a href="https://github.com/KaguraDun">Vasily Kovnev</a>
        </li>
        <li className="authors__item">
          <a href="https://github.com/Kampaku">Georgii Lopatin</a>
        </li>
      </ul>

      <span className="year">2021</span>

      <div className="logo">
        <img alt="" src="../../rs_school_js.svg" />
      </div>
    </div>
  );
};

export default Footer;
