function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card image" />
      <h4 className="card__title">{props.title}</h4>
      <p className="card__sub">{props.sub}</p>
    </div>
  );
}
export default Card;
