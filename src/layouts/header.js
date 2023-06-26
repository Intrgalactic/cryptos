import logo from 'assets/images/logo.png';
import Nav from './nav';
import { motion } from 'framer-motion';
import { animateVariant } from 'pages/home';
export default function Header() {
    return (
        <motion.header variants={animateVariant} animate="visible" initial="hidden">
            <img src={logo} alt="company logo"/>
            <Nav/>
        </motion.header>
    )
}