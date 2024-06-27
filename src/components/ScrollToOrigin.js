// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToOrigin = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScrollToOrigin = () => {
      window.scrollTo(0, 0);
    };

    // Scroll to top on route change
    handleScrollToOrigin();

    // Add click event listeners to all nav links
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToOrigin);
    });

    // Clean up event listeners on component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToOrigin);
      });
    };
  }, [pathname]);

  return null;
};

export default ScrollToOrigin;
