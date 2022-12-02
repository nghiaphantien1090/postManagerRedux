import clsx from 'clsx'
import style from './navBar.module.scss'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <div className={clsx(style.navBar)}>
            <section>
                <h1>
                    Redux Essentials Example
                </h1>
                <div className={clsx(style.controls)}>
                    <div className={clsx(style.wrapLinkBtns)}>
                        <Link to="/Posts" >
                            Posts
                        </Link>
                        <Link to="/Users" >
                            Users
                        </Link>
                        <Link to="/NotificationsList" >
                            Notifications
                        </Link>
                    </div>
                    <div className={clsx(style.btnNotifications)}>
                        <p>
                            Notifications
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}