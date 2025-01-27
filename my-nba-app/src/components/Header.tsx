// PascalCasing

function Title() {
  // JSX: Javascript XML
  const name = "NBA Dream Team Builder 2016-17 Season";
  return <h1>{name}</h1>;
}

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  );
}

export default Title;
export default Nav;
