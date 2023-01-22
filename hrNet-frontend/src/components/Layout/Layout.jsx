import React from 'react'
import { Link, Outlet } from 'react-router-dom'


import { LogoImg, ContentNavBar, TitleLogo, ContentFooter, TitleFooter } from './index.styles'
import Logo from '../../assets/logo.png'

/**
 * Description: Layout Header
 * @returns {any}
 */
export const Header = () => {
  const content = (
    <ContentNavBar fluid={true} className="p-0">
      <TitleLogo>
         <Link to="/">
          <LogoImg fetchpriority="low" src={Logo} alt="Hrnet" href="/" />
        <h1>HrNet</h1>
        </Link>
      </TitleLogo>
      <Link to="/employees">View Current Employees</Link>
    </ContentNavBar>
  )
  return content
}
/**
 * Description: Layout Footer
 * @returns {any}
 */
export const Footer = () => {
  const content = (
    <ContentFooter fluid={true} className="p-0 d-flex justify-content-center">
      <TitleFooter >
        <p>HrNet </p>
        <p>  @2022</p>
      </TitleFooter>
    </ContentFooter>
  )
  return content
}

/**
 * Access to the Path Child
 * @compoment
 * @returns {JSX.Element}
 */
const Layout = () => {
  return <Outlet />
}

export default Layout
