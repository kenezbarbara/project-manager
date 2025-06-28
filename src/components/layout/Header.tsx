export default function Header() {
  return (
    <div className="row flex-grow-2">
      <div className="col-12 p-0">
        <nav className="navbar bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand">Corporate Projects</a>
            <button className="btn btn-outline-light mt-2">
              Add new project
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
