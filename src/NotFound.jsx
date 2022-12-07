import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Beklager</h2>
      <p>Den side findes ikke</p>
      <Link to="/home">Tilbage til startsiden ...</Link>
    </div>
  );
}
export default NotFound