import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: #f4faff;
  color: #535657;
  font-size: 1.4rem;
  align-items: center;
  padding: 12px;
  align-content: center;
  text-align: center;
  vertical-align: middle;

  a {
    color: #3bb273;
    text-decoration: none;
  }
`;

const I = styled.i`
  margin-left: 10px;

  color: black;
  cursor: pointer;
`;

export class Footer extends React.Component {
  handleIconClick(link) {
    window.open("https://github.com/ReeceLangerock/camper-leaderboard", "_blank");
  }
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <FooterStyled className="Footer">
        © {currentYear}{" "}
        <a href="http://reecelangerock.com" rel="noopener noreferrer" target="_blank">
          Reece Langerock
        </a>
        <I className={`fa fa-github`} aria-hidden="false" onClick={() => this.handleIconClick()} />
      </FooterStyled>
    );
  }
}
export default Footer;
