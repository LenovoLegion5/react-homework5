function aboutCard(props) {
  return (
    <div className="about__card">
      <img src={props.img} alt="image" />
      <div className="card__inner">
        <p className="aCard__desc">{props.desc}</p>
        <h6 className="aCard__title">{props.title}</h6>
        <p className="aCard__sub">{props.sub}</p>
        <a href="#" className="aCard__link">
          Devamını Oku <i class="fa-solid fa-angles-right"></i>
        </a>
      </div>
    </div>
  );
}
export default aboutCard;
