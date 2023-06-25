import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link>wallet</Link>
            <Link>exchange</Link>
            <Link>pricing</Link>
            <Link>faq</Link>
            <Link>sign in</Link>
            <Link>sign up</Link>
        </nav>
    )
}