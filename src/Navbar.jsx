import style from "./Navbar.module.css";
export default function Navbar() {

  return <nav className={`${style.nav} navbar navbar-expand-lg navbar-light bg-light`}>
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <div className="d-flex ">
        <button className={`${style.button} btn btn-outline-success`} type="submit">Login</button>
        <button className="btn btn-outline-success" type="submit">Register</button>
      </div>
    </div>
  </div>
</nav>


}

