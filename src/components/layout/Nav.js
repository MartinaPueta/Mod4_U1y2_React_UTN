import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (

        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive })=> isActive ? "activo" : undefined } >Inicio</NavLink></li>
                    <li><NavLink to="/servicios" className={({ isActive })=> isActive ? "activo" : undefined } >Servicios</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive })=> isActive ? "activo" : undefined } >Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive })=> isActive ? "activo" : undefined } >Contacto</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}
export default Nav;