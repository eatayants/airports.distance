import styled from 'styled-components';
import type { FunctionComponent } from 'react';

const BrandContent = styled.div`
  text-align: center;
  word-spacing: 0.05rem;
`;

const StyledFooter = styled.footer`
  color: #fff;
  width: 100%;
  margin: auto;
  display: block;
  font-size: 1.15rem;
  padding: 3rem 1.5rem;
  background-color: #33363b;

  @media all and (max-width: 769px) {
    font-size: 1rem;
  }
`;

const FooterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0rem;
  align-items: center;
  justify-content: flex-start;

  > a {
    :first-child {
      margin-left: auto !important;
    }

    :last-child {
      margin-right: auto !important;
    }
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 0;
  font-size: 1.25rem;
  padding: 0 0.5em 0.75rem;
  border-color: transparent;
  margin-right: 0 !important;
  background-color: transparent;
  transition: color 0.2s ease-out;

  &:hover {
    color: #09d3ac;
  }

  .icon {
    align-items: baseline;
  }
`;

const Footer: FunctionComponent = () => (
  <StyledFooter>
    <FooterButtons>
    </FooterButtons>
    <BrandContent>
      {`Copyright © ${new Date().getFullYear()}`}
    </BrandContent>
  </StyledFooter>
);

export default Footer;