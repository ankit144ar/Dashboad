import Salary from '../../Components/Salary/Salary';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './salaries.css';

function Salaries() {
  return (
    <div  className='teamContainer'>
      <Sidebar/>
      <Salary/>
    </div>
  )
}

export default Salaries
