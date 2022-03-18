import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { faImdb } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterContainer = styled.div`
background: linear-gradient(120deg, rgb(236, 136, 236, 2.8) 10%, rgba(155, 25, 95, 1) 50%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SocialMed = styled.section`
max-width: 1000px;
width: 100%;
`;

const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 20px auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}

`
const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    font-family: "Ubuntu", sans-serif;
`;

const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`


const Footer = () => {
  return (
    <FooterContainer>
    <SocialMed>
    <SocialMediaWrap>    
    <WebsiteRights>{new Date().getFullYear()}</WebsiteRights>
    <SocialIcons>   
    <Link href="http://www.omdbapi.com" passHref>
    <SocialIconLink target="_blank" aria-label="omdb" >
    <FontAwesomeIcon icon={faImdb} />
    </SocialIconLink>
    </Link>       
    </SocialIcons>
    </SocialMediaWrap>
    </SocialMed>
    </FooterContainer>
  )
}

export default Footer