/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { MenuHeading, MenuRow } from "./MenuStyles";

const Menu = ({ menu }) => {
  return (
    <div className="container">
      <div className="row">
        <MenuHeading className="col">
          <h2>Tea Of The Month</h2>
          <h6>What's Steeping At Tea Cozy?</h6>
        </MenuHeading>
      </div>
      <MenuRow className="row">{menu}</MenuRow>
    </div>
  );
};

export default Menu;
