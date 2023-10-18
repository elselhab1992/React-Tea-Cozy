import { FooterStyles, CopyRights } from "./FooterStyles";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <FooterStyles className="col">
            <h4>The Tea Cozy</h4>
            <p>contact@teacozy.com</p>
            <p>917-555-8904</p>
          </FooterStyles>
          <div className="row">
            <div className="col">
              <CopyRights>copyright The Tea Cozy 2017</CopyRights>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
