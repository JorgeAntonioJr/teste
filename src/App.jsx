import { Outlet, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className="d-flex align-items-center pb-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Master Demo</span>
          </Link>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-auto">
            <Link
              className="me-3 py-2 link-body-emphasis text-decoration-none"
              to="/"
            >
              Home
            </Link>
            <Link
              className="me-3 py-2 link-body-emphasis text-decoration-none"
              to="/cadastro"
            >
              Cadastro
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
