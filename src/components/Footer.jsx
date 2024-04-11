import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#e3f2fd', textAlign: 'center' }}>
      <div className="container py-3">
        <footer>
          <div>Copyright &copy; {new Date().getFullYear()}</div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
