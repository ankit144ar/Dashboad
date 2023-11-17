import './team.css';
import Sidebar from '../../Components/Sidebar/Sidebar'
import TeamMembers from '../../Components/TeamMembers/TeamMembers'

function Team() {
  return (
    <div className='teamContainer'>
      <Sidebar/>
      <TeamMembers/>
    </div>
  )
}

export default Team
