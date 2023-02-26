import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <ul className="link-list">
        <li>
          <Link className="link" to={`/`}>
            Converter
          </Link>
        </li>
        {/* <li>
          <Link to={`/exchange-rate`}>Exchange Rate</Link>
        </li> */}
      </ul>
    </nav>
  );
}
export default Navigation;
