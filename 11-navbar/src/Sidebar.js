import React from "react"
import { links, social } from './data'

const Sidebar = () => {
    return (
        <React.Fragment>
            <h4>Sidebar</h4>
            <div className="links-container show-container">
                <ul className="links">
                    {links.map(link => {
                    const { id, url, text } = link
                    return (
                        <li key={id}>
                        <a href={url}>{text}</a>
                        </li>
                    )
                    })}
                </ul>
                <ul className="social-icons">
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon
                        return (
                        <li key={id}>
                            <a href={url}>
                            {icon}
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Sidebar