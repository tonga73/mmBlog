import React from "react"
import { Link } from "gatsby"
import * as styles from "../assets/scss/Index.module.scss"

import { rhythm } from "../utils/typography"

import Navigation from "./navigation"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const navProps = {
        listItems: [
            { link: "./blog", name: "Blog" },
            { link: "#Nutrición", name: "Nutrición" },
            { link: "#Coaching", name: "Coaching" },
            { link: "#Contacto", name: "Contacto" }
        ]
    };
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let footer

    if (location.pathname === rootPath) {
      header = (
        <nav>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <img
              alt="Logo Header"
              className="header-logo"
              src="img/logoTexto.png" 
            />
          </Link>
          <Navigation navProps={navProps}/>
        </nav>
      )
    } else {
      header = (
        <nav>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <img
              alt="Logo Header"
              className="header-logo"
              src="img/logo.png" 
            />
          </Link>
          <span>
            {location.pathname}
          </span>
          <Navigation navProps={navProps}/>
        </nav>
      )
    }

    footer = (
      <div>
        <Navigation navProps={navProps}/>
        <span>2019</span>
      </div>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header className={styles.MainHeader}>{header}</header>
        <main>{children}</main>
        <footer className={styles.MainFooter}>{footer}</footer>
      </div>
    )
  }
}

export default Layout
