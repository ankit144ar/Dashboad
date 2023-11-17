import SearchIcon from '../../Icons/search(1).png';
import NotificationIcon from '../../Icons/notification.png';
import ProfileIcon from '../../Icons/profile.jpg';
import './navbar.css';

function Navbar() {
  return (
    <div className='mainNavContainer'>
      <div className='dashboadContainer'>
        <h1 className='dashText'>Dashboard</h1>
      </div>
      <div className='searchItemsContainer'>
        <img className='searchIcon' src={SearchIcon} alt='search'></img>
        <input className='searchInput' type='search'  placeholder='search'/>
      </div>
      <div className='profileItemsContainers'>
        <img className='notificationIcon' src={NotificationIcon} alt=''/>
        <div className='profileItems'>
          <img className='profileIcon' src={ProfileIcon} alt=''/>
          <p className='profileName'>Ankit</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
