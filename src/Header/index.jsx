import Nav from "../Nav";
import Slider from "../slider";

function Header() {
  return (
    <header>
      <Nav li="Ana Sayfa" li2="Kurumsal" li3="Neler Yapıyoruz?" li4="Blog" />
      <div className="container">
        <div className="header__wrapper">
          <div className="header__inner">
            <h1 className="header__title">
              İşinize Uygun <span className="txt_blue">Tasarım</span> <br /> Ve{" "}
              <span className="txt_blue">Yazılımlary</span>
            </h1>
            <p className="header__sub">
              360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
              İşletmelerin <br /> ihtiyaçlarına uygun web tasarım ve web yazılım
              hizmetleri sunmaktayız.
            </p>
            <a href="#" className="header__link">
              Detaylı İncele <i className="fa-solid fa-angles-right"></i>
            </a>
            <Slider />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
