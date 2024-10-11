export function Panel({ title, isActive, innerBody, clickHandler }) {
  return (
    <div className="accordianContainer">
      <div className="item">
        <div className="title" onClick={clickHandler}>
          <div className="titleText">{title} </div>{" "}
          <div className="accordianStatus">{isActive ? "+" : "-"}</div>
        </div>
        <div className="accordianContent">{innerBody}</div>
      </div>
    </div>
  );
}
export default Panel;
