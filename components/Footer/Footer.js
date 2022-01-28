import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>

          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7900194486">+91 7900194486</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="mailto:amititeducation@gmail.com">amititeducation@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This Is My Full Portofolio, Thanks For Visit! </Slogan>
        </CompanyContainer>

        <SocialContainer>

          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>

          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>

          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem"></AiFillInstagram>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
