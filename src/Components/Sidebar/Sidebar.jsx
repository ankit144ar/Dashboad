import './sidebar.css';
import HomeIcon from '../../Icons/home.png';
import DailyTaskIcon from '../../Icons/DailyTask.png';
import MonthlySalaryIcon from '../../Icons/monthlyIncome.png';
import SalaryIcon from '../../Icons/Salary.png';
import SettingsIcon from '../../Icons/setting.png';
import TeammembersIcon from '../../Icons/Teammembers.png';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='mainSidebarContainer'>
        <div>
            <ul className='ulContainer'>
                <h4 className='Menu'>Menu</h4>
                <li className='liContainer'>
                    <Link to={'/'} >
                    <img className="sidebarIcons" src={HomeIcon} alt='HomeIcon'/>
                    <p className='itemNames'>Home</p>
                    </Link>
                </li>
                <li className='liContainer'>
                    <img className="sidebarIcons" src={DailyTaskIcon} alt='DailyTaskIcon'/>
                    <p className='itemNames'>Daily Task</p>
                </li>
                <li className='liContainer'>
                <Link to={'/team'} >
                    <img className="sidebarIcons" src={TeammembersIcon} alt='TeammembersIcon'/>
                    <p className='itemNames'>Team Members</p>
                    </Link>
                </li>
                <li className='liContainer'>
                    <img className="sidebarIcons" src={MonthlySalaryIcon} alt='MonthlySalaryIcon'/>
                    <p className='itemNames'>Monthly Income</p>
                </li>
                <li className='liContainer'>
                <Link to={'/salary'} >
                    <img className="sidebarIcons" src={SalaryIcon} alt='SalaryIcon'/>
                    <p className='itemNames'>Salaries</p>
                    </Link>
                </li>
                {/* <li className='liContainer'>
                    <img className="sidebarIcons" src={MessageIcon} alt='TeammembersIcon'/>
                    <p className='itemNames'>Home</p>
                </li> */}
                <li className='liContainer'>
                    <img className="sidebarIcons" src={SettingsIcon} alt='SettingsIcon'/>
                    <p className='itemNames'>Settings</p>
                </li>                
            </ul>

            <div className='scheduleMain'>
                <h4 className='scheduleTitle'>Scheduled Events</h4>
                <div className='scheduleContainer'>
                    <input type='radio' value={'Bday'}/>
                    <label htmlFor='Bday'>Bday</label>
                </div>
                <div className='scheduleContainer'>
                    <input type='radio' value={'Anniversary'}/>
                    <label htmlFor='Anniversary'>Anniversary</label>
                </div>
                <div className='scheduleContainer'>
                    <input type='radio' value={'Exam'}/>
                    <label htmlFor='Exam'>Exam</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
