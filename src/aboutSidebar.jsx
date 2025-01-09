import './aboutSidebar.css'
function AboutSidebar({ isOpen }) {
    return (
      <div className={`aboutSidebar ${isOpen ? 'open' : ''}`}>
        <p>Hi, my name is Kevin Vu!</p>
      </div>
    );
  }
  
  export default AboutSidebar;
  