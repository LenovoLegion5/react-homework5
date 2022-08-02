import Card from "./card";

function Cards() {
  return (
    <section className="cards">
      <div className="container">
        <h5 className="cards__title">
          Neler <span className="txt_blue"> Yapıyoruz?</span>
        </h5>
        <h3 className="cards__title_big">3 adımda çalışma sürecimiz</h3>
        <p className="header__sub">
          360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
          İşletmelerin <br /> ihtiyaçlarına uygun web tasarım ve web yazılım
          hizmetleri sunmaktayız.
        </p>
        <div className="cards__wrapper">
          <Card
            img="/src/assets/coffee.png"
            title="Keşif ve Planlama"
            sub="Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."
          />
          <Card
            img="/src/assets/pack.png"
            title="Tasarım ve Geliştirme"
            sub="Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."
          />
          <Card
            img="/src/assets/clock.png"
            title="Test ve Yayına Alma"
            sub="Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."
          />
        </div>
      </div>
    </section>
  );
}
export default Cards;
