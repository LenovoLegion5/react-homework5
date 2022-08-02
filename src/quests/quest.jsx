function quest(props) {
  return (
    <>
      <div className="quest">
        <span className={props.active}></span>
        <h4 className="question__title">{props.title}</h4>
        <p className="question__sub">{props.sub}</p>
      </div>
    </>
  );
}
export default quest;
