import { useState } from 'react';
import './App.css';
import Header from './header.jsx';
import AboutSidebar from './aboutSidebar.jsx'

function App() {
  const [isAboutSidebarOpen, setIsAboutSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsAboutSidebarOpen(!isAboutSidebarOpen);
  }
  return (
    <div className='app'>
      <Header onToggleSidebar = {toggleSidebar}/>
      {isAboutSidebarOpen && <AboutSidebar isOpen={isAboutSidebarOpen}/>}
    </div>
  );
}

export default App;
