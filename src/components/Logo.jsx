import { NavLink } from "react-router-dom";
import LogoDark from "../assets/codenation_logo_dark.png";
import LogoLight from "../assets/codenation_logo_light0.png";

export const LightLogo = () => (
  <NavLink to="/">
    <img src={LogoLight} alt="CodeNation" className="site-logo" />
  </NavLink>
);

export const DarkLogo = () => (
  <NavLink to="/">
    <img src={LogoDark} alt="CodeNation" className="site-logo" />
  </NavLink>
);
