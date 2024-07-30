import './Nav.css';
import NavLink from '../NavLink/NavLink.js';

var links = ['Background', 'Skills', 'Projects'];

export default function Nav() {
    return (
        <nav>
            {links.map(link => <NavLink link={link} />)}
        </nav>
    )
}