import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#212529',
    color: 'white',
    position: 'fixed',
    bottom:'0',
    textAlign: 'center',
    width: '100vw',
    padding: '1rem'
  };

  return (
    <footer style={footerStyle}>
      <p>Copyright © 2023 <a href="https://www.instagram.com/shadexml_/?igshid=MDM4ZDc5MmU=" without rel="noreferrer"style={{color:"white", textDecoration: "none"}} target={"_blank"} >
        Shadexml
      </a>
        </p>
    </footer>
  );
}

export default Footer;
