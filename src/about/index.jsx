import AboutBtn from "./about-btn";
import AboutCard from "./about-card";

function about() {
  return (
    <section className="about">
      <div className="container">
        <h5 className="cards__title">
          Neler <span className="txt_blue"> Yapıyoruz?</span>
        </h5>
        <h3 className="quests__title tac">Sizin için neler yapıyoruz?</h3>
        <p className="article__sub tac">
          Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları
          yazıları inceleyelim.
        </p>
        <div className="btn__wrapper">
          <AboutBtn text="Hepsini Gör" />
          <AboutBtn text="Web Tasarım" />
          <AboutBtn text="Kurumsal Kimlik Tasarımı" />
          <AboutBtn text="SEO" />
          <AboutBtn text="Dijital Pazarlama" />
        </div>
        <div className="cards__wrapper2">
          <AboutCard
            img="src/assets/first.png"
            desc="Dijital Pazarlama"
            title="Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?"
            sub="Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal..."
          />
          <AboutCard
            img="src/assets/second.png"
            desc="Dijital Pazarlama"
            title="Dijital PR Nedir? Dijital PR Neden Gereklidir?"
            sub="Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin..."
          />
          <AboutCard
            img="src/assets/third.png"
            desc="Kurumsal Kimlik Tasarımı"
            title="Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?"
            sub="Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet..."
          />
          <AboutCard
            img="src/assets/fourth.png"
            desc="Dijital Pazarlama"
            title="Online İtibar Yönetimi Nedir?"
            sub="Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek..."
          />
        </div>
      </div>
    </section>
  );
}
export default about;
