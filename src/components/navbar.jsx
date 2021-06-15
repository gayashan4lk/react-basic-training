// Stateless functional component

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000/">Navbar</a>
            <h4><span className="badge badge-pill badge-secondary">{props.totalCounters}</span></h4>
        </nav>
    );
}

export default NavBar;