import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';
import './navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlined className='icon' />

        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlined className='icon' />
            english
          </div>
          <div className='item'>
            <DarkModeOutlined className='icon' />

          </div>
          <div className='item'>
            <FullscreenExitOutlined className='icon' />

          </div>
          <div className='item'>
            <NotificationsNoneOutlined className='icon' />
            <div className='counter'>1</div>

          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlined className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlined className='icon' />

          </div>
          <div className='item'>
            <img
              src='https://unsplash.com/photos/a-small-toy-is-standing-in-front-of-a-pink-background-jlJpDBK17Hw'
              alt=''
              className='avatar'
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;