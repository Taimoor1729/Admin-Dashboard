import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='top'>
        <div className='logo'>lamadev</div>
      </div>
      <hr />
      <div className='center'>
        <ul>
        <p className='title'>MAIN</p>
          <li>
          <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <Person2OutlinedIcon className='icon'/>
            <span>User</span>
          </li>
          <li>
            <AddBusinessOutlinedIcon className='icon'/>
            <span>Product</span>
          </li>
          <li>
            <DvrOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL </p>
          <li>
            <QueryStatsIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE </p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'> 
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
}

export default Sidebar;