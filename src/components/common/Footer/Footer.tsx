import { FaRegCopyright } from "react-icons/fa6";
import styles from "./Footer.module.scss";

const { footer } = styles;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={footer}>
      <span>
        <FaRegCopyright />
      </span>
      <p>{year} Mekasel, All rights reserved</p>
    </footer>
  );
};

export default Footer;
