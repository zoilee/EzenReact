import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
   width: 1330px;
   max-width: 100%;
   margin-left:auto;
   margin-right:auto;
`;
const Nav = styled.div`
   padding-top:10px;
   padding-bottom:10px;
   display:flex;
   justify-content:space-around;
   border-bottom:1px dashed #ddd;
`;
const Links = styled.span`
   line-height:1.8;
   padding-left:15px;
   padding-right:15px;
   display:inline-block;
   text-align:center;
   width:100%;
   &:hover{
     background: pink;
     transition: 0.5s;
   }
`;

const Layout = () => {
  return (
    <Container>
       <Nav>
          <Links><Link to="/">HOME</Link></Links> |
          <Links><Link to="/about">About</Link></Links> |
          <Links><Link to="/servicies">Servicies</Link></Links>
          <Links><Link to="/contact">Contact</Link></Links> |
       </Nav>
       <Outlet />
    </Container>
  )
}

export default Layout