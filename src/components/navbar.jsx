import React, {Component} from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000/">Navbar</a>
                <h4><span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></h4>
            </nav>
        );
    }
}

export default NavBar;