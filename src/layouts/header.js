import logo from 'assets/images/logo.png';
import Nav from './nav';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="company logo"/>
            <Nav/>
        </header>
    )
}