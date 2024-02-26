import "./Summary.css";
import Row from "../Row/Row";
import flash from "../../iconoir_flash.png";
import memory from "../../iconoir_brain.png";
import verbal from "../../iconoir_chat-remove.png";
import visual from "../../iconoir_eye-empty.png";
function Summary() {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <div className="summary-content">
        <Row
          title="Reaction"
          img={flash}
          number="80"
          className="reaction"
          titleClass="reaction-title"
        />
        <Row
          title="Memory"
          img={memory}
          number="92"
          className="memory"
          titleClass="memory-title"
        />
        <Row
          title="Verbal"
          img={verbal}
          number="61"
          className="verbal"
          titleClass="verbal-title"
        />
        <Row
          title="Visual"
          img={visual}
          number="73"
          className="visual"
          titleClass="visual-title"
        />
      </div>
    </div>
  );
}
export default Summary;
