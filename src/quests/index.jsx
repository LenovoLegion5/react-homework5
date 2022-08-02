import Question from "./quest";
function quests(props) {
  return (
    <section className="quests">
      <div className="container">
        <h5 className="cards__title">
          Neler <span className="txt_blue"> Yapıyoruz?</span>
        </h5>
        <h3 className="quests__title">Sizin için neler yapıyoruz?</h3>
        <p className="article__sub">
          360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
          İşletmelerin <br /> ihtiyaçlarına uygun web tasarım ve web yazılım
          hizmetleri sunmaktayız.
        </p>
        <div className="quest__inner">
          <img
            src="/src/assets/article-img.png"
            alt="image"
            className="quest__img"
          />
          <div className="quest__info">
            <h3 className="inner__title">
              Sizin için neler yapabiliriz <br /> beraber bakalım.
            </h3>
            <p className="inner__sub">
              Tüm platformlarda sunduğumuz, web <br /> tasarım hizmetimiz ile
              ilgili bilgiler edinelim.
            </p>
            <Question
              active="active"
              title="Web Tasarım"
              sub="Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi."
            />
            <Question
              title="Dijital Pazarlama"
              sub="Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz."
            />
            <Question
              title="Prodüksiyon"
              sub="İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default quests;
