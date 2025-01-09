import './header.css';

function Header({onToggleSidebar}) {
  return (
    <div className='header'>
      <div className='left'>Kevu</div>
      <div className='right'>
        <button onClick={onToggleSidebar}>About</button>
        <button>Experience</button>
        <button>Hobbies</button>
      </div>
    </div>
  );
}

export default Header;
