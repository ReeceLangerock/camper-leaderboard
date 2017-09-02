import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`

  background-color: #f4faff;
  color: #535657;

  align-items:center;
  padding: 12px;
  align-content:center;
  text-align: center;
  vertical-align: middle;

  a {
    color: #3bb273;
    text-decoration: none;
  }
`;

export class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <FooterStyled className="Footer">
        © {currentYear}{" "}
        <a href="http://reecelangerock.com" rel="noopener noreferrer" target="_blank">
          Reece Langerock
        </a>
      </FooterStyled>
    );
  }
}
export default Footer;
