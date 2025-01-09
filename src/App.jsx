import { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AboutSidebar from './aboutSidebar.jsx';  // Corrected import

function App() {
  const [isAboutSidebarOpen, setIsAboutSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);  // Create a ref for the sidebar

  const toggleSidebar = () => {
    setIsAboutSidebarOpen(prevState => !prevState);  // Toggle between open/close
  };

  const closeSidebar = () => {
    setIsAboutSidebarOpen(false);  // Close the sidebar
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();  // Close if click is outside of the sidebar
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="app">
      <Header onToggleSidebar={toggleSidebar} />
      {/* Show overlay and sidebar when the sidebar is open */}
      <div className={`sidebarOverlay ${isAboutSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
      <AboutSidebar ref={sidebarRef} isOpen={isAboutSidebarOpen} />
    </div>
  );
}

export default App;
