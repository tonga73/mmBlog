import React from "react"
import { Link } from "gatsby"

export default class Navigation extends React.Component {
    render() {
        const {listItems} = this.props.navProps;
        return (
            <ul
                style={{
                    listStyleType: `none`,
                }}
            >
                {listItems.map(item => (
                    <li>
                        <Link
                         style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                         }} 
                         to={item.link}>
                            {item.name}
                         </Link>
                    </li>
                ))}
            </ul>
        )
    }
}