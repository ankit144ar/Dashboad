import HomeRightbar from '../../Components/HomeRightbar/HomeRightbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './home.css';

function Home() {
  return (
    <div className='MainHomeContainer'>
      <Sidebar/>
      <HomeRightbar/>
    </div>
  )
}

export default Home
