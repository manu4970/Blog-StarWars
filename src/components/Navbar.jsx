import { useParams, Link } from "react-router-dom";

export function Navbar(props) {
  // todo: probar param para hacer ruta dinamica en fav navbar
  const params = useParams()
  console.log(params)
  
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-2 fw-bold" >
            StarWars
          </Link>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {props.favList.map((list, index) => (
                <li key={index}>
                  <Link 
                    to={"character/"} 
                    className="dropdown-item" 
                    href="#">
                    {list}
                  </Link>
                  <i
                    className="x fa-solid fa-x"
                    onClick={() => props.deleteElement(list, index)}
                  ></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
