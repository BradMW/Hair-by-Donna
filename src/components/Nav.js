import React from 'react';

const styles = {
  tabs: {
    display: "flex",
    margin: "0",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "25px",
    backgroundColor: "#2198A6",
    position: "fixed",
    width: "100%",
    height: "6rem",
    top: "0",
    zIndex: "1",
    listStyle: "none"
  },
  tabsTxt: {
    color: "#F2F2F2",
    textDecoration: "none"
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
