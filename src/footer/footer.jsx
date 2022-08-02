import FooterS from "./footer-slider";
function siteFooter() {
  return (
    <footer>
      <div className="container">
        <h1 className="footer__title">
          Memnuniyetini bildiren <br /> müşterilerimiz
        </h1>
        <div className="slider__wrapper">
          <FooterS />
        </div>
      </div>
      <section className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="footer__list">
              <li>
                <a className="footer__link" href="#">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  Kurumsal
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  Neler Yapıyoruz?
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  Projelerimiz
                </a>
              </li>
              <li>
                <a className="footer__link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <a href="#" className="footer__link">
              © 2021 Can Çevik. All rights reserved
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default siteFooter;
