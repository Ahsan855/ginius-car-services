import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        <small>
          Copyright&copy;
          <span id="copyright">
            <script>
              document.getElementById('copyright').appendChild(document.createTextNode(new
              Date().getFullYear()))
            </script>
          </span>
          Ahsan Habib
        </small>
      </p>
    </footer>
  );
};

export default Footer;
