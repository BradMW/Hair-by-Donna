import React from 'react';

const styles = {
  tabs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "20px",
    backgroundColor: "#35478C",
    position: "fixed",
    width: "100%",
    zIndex: "1"
  },
  tabsTxt: {
    color: "#ADD5F7"
  }
}

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.tabs} className="nav nav-tabs">
      <li  className="nav-item text-danger">
        <a style={styles.tabsTxt}
          href="#gallery"
          onClick={() => handlePageChange('Gallery')}
          className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}
          
        >
          Gallery
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.tabsTxt}
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
         About
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.tabsTxt}
          href="#locations"
          onClick={() => handlePageChange('Locations')}
          className={currentPage === 'Locations' ? 'nav-link active' : 'nav-link'}
        >
          Locations
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.tabsTxt}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.tabsTxt}
          href="#services"
          onClick={() => handlePageChange('Services')}
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </a>
      </li>
    </ul>
  );
}

export default Nav;
