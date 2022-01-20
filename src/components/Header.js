import React, { useState } from 'react';
import Nav from './Nav';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Gallery');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Gallery') {
      return <Gallery />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Locations') {
      return <Locations />;
    }
    return <Contact />;
    if (currentPage === 'Contact') {
        return <Contact />;
      }
     if (currentPage === 'Services') {
        return <Services />;
      }  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}



