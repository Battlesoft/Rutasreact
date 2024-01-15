import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <link className="btn btn-outline-primary" to="/">Inicio</link>
            <link className="btn btn-outline-primary" to="/contacto">Contacto</link>
            <link className="btn btn-outline-primary" to="/blog">Blog</link>
        </div>
    )
}

export default Navbar