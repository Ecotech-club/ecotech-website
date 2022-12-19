import Link from "next/link";
import styles from "../../styles/navbar.module.css"
const NavItem = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <a
                className={styles.nav__link}>
                {text}
            </a>
        </Link>
    );
};

export default NavItem;