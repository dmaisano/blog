/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
  return (
    <footer
      sx={{
        textAlign: `center`,
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [4],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by dmaisano. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
