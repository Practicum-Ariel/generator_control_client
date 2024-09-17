import { NavLink, Outlet } from 'react-router-dom'
import styles from './style.module.css'

export default function Settings() {
    const links = [
        { id: 1, title: 'Add machine', href: 'new-machine' },
        { id: 2, title: 'Alerts and limit crosser settings', href: 'alerts-and-limit-crosser' },
        { id: 3, title: 'Users and permissions management', href: 'users-and-permission' },
        { id: 4, title: 'System management and configuration', href: 'system-and-configuration' },
        { id: 5, title: 'Reports system', href: 'reports-system-settings' },
    ]

    return (
        <section className={styles.settings}>
            <section className={styles.mainNav}>
                <ul>
                    {links.map(link =>
                        <li key={link.id}>
                            <NavLink to={link.href} className={({ isActive }) =>
                                isActive ? `${styles.active}` : ''}>
                                {link.title}
                            </NavLink>
                        </li>)}
                </ul>
            </section>
            <Outlet />
        </section>
    )
}