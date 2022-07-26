import { Link } from "react-router-dom"

export function Navbar() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>
  
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>            
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/user" className="nav-link px-2 text-white">
                  User
                </a>
              </li>
            </ul>
  
            <div className="text-end">
              <Link to="/post" className="text-decoration-none">
                <button type="button" className="btn btn-outline-light me-2">
                  Post Request
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }