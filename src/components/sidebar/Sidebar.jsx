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
          <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <Person2OutlinedIcon />
            <span>User</span>
          </li>
          <li>
            <AddBusinessOutlinedIcon />
            <span>Product</span>
          </li>
          <li>
            <DvrOutlinedIcon />
            <span>Orders</span>
          </li>
          <li>
          <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL </p>
          <li>
            <QueryStatsIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon />
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE </p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'> bottom</div>
    </div>
  );
}

export default Sidebar;