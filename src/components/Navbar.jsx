import { useState } from "react";

export function Navbar(props) {
  const list = props.favList
  console.log(list)

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fs-2 fw-bold" href="#">
            StarWars
          </a>
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Favoritos
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {props.favList.map((list, index) =>(
                <>
                  <li key={index}><a className="dropdown-item" href="#">{list}</a>
                    <i 
                    className="x fa-solid fa-x"
                    onClick={()=> props.deleteElement(list,index)}
                      >
                    </i>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
