import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {IconContext} from 'react-icons/lib';
import {FaBars, FaTimes} from 'react-icons/fa'
import Link from 'next/link';


const Nav = styled.nav`
background: linear-gradient(120deg, rgb(236, 136, 236, 2.8) 10%, rgba(155, 25, 95, 1) 50%);
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
position: sticky;
top: 0;
z-index: 999;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1000px;
`;

const NavLogo = styled.a`
color: #141414;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
`;

const NavIcon = styled.div`
/* margin: 0 0.5rem 0 2rem; */

margin-top: 3.5rem;
margin-left: -10rem;
`;

const MobileIcon = styled.div`
display none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
     display: flex;
     flex-direction: column;
     width: 100%;
     height: 90vh;
     position: absolute;
     top: ${({ click }) => (click ? "100%" : "-1000px") };
     opacity: 1;
     transition: all 0.2s ease;
     background: linear-gradient(120deg, rgb(236, 136, 236, 2.8) 10%, rgba(155, 25, 95, 1) 50%);
 }
`;

const NavItem = styled.li`
height: 80px;

@media screen and (max-width: 960px) {
    width: 100%;
}
`;

const NavLinks = styled.a`
color: #DDDEE3;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;
    font-family: "Ubuntu", sans-serif;

    @media screen and (max-width: 960px) {
        color: #F17C09;
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #ff4040;
            transition: all 0.3s ease;
        }
    }
`;

const Navbar = () => {
    const[click,setClick] = useState(false)
    const[scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener('scroll', changeNav)
        return() => {
            changeNav(false)
        }
    }, [])

    return (
        <>
        <IconContext.Provider value={{color: '#717276'}} >
        <Nav active={scroll} click={click}>
        <NavbarContainer>
            <NavLogo>               
                <NavIcon>              
                </NavIcon>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>               
                <NavItem>
                <Link  href="/" passHref>
                <NavLinks>home</NavLinks>
                </Link>                   
                </NavItem>               
                <NavItem>
                <Link  href="/movies" passHref>
                <NavLinks>search movies</NavLinks>
                </Link>                   
                </NavItem>               
            </NavMenu>
        </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )

}

export default Navbar