import React from 'react'
import { Link, Outlet } from 'react-router-dom'


import { LogoImg, ContentNavBar, TitleLogo, ContentFooter, LogoImgFooter, TitleFooter } from './index.styles'
import Logo from '../../assets/logo.png'

export const Header = () => {
  const content = (
    <ContentNavBar fluid={true} className="p-0">
      <TitleLogo>
         <Link to="/">
          <LogoImg src={Logo} alt="Hrnet" href="/" />
        <h1>HrNet</h1>
        </Link>
      </TitleLogo>
      <Link to="/employees">View Current Employees</Link>
    </ContentNavBar>
  )
  return content
}
export const Footer = () => {
  const content = (
    <ContentFooter fluid={true} className="p-0 d-flex justify-content-center">
      <TitleFooter >
        <LogoImgFooter src="logo192.png" alt="Hrnet" href="/" />
        <h5>HrNet </h5>
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
