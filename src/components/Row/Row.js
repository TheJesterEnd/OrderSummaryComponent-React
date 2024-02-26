import "./Row.css";
function Row(props) {
  return (
    <div className={`row-container ${props.className}`}>
      <div className="row-container_content">
        <img src={props.img} alt="flash icon" />
        <p className={props.titleClass}>{props.title}</p>
      </div>
      <span className="number-info">
        {props.number} <p>/ 100</p>
      </span>
    </div>
  );
}
export default Row;
