import { useState } from 'react';
// 跳轉頁面 引入
import { Link } from 'react-router-dom';
// 引入 所需組件 
import { Button, Space, Drawer} from 'antd';
// 引入 Icon
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import logo from '../../assets/logo.svg';
import './HeadNav.css';

function Header() {
  const [open, setOpen] = useState(false);
  const [placement] = useState('left');

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className='HeadNav'>
      <div className='HeadNav-logo'>
        <img src={logo} className="HeadNav-logo-img" alt="logo" />
        <Link to="/" style={{ color: 'black'}}><h1>Wei的網站</h1></Link>
      </div>
      <div className='HeadNav-bar'>
        <ul className='HeadNav-ul'>
          <Link to="/"><li className='HeadNav-li'>首頁</li></Link>
          <Link to="/contact"><li className='HeadNav-li'>聯絡我</li></Link>
        </ul>
      </div>

      <div className='HeadNav-Menu-Bar'>
        <Space wrap>
          <Button icon={<MenuOutlined/>}  onClick={showDrawer} />
        </Space>
      </div>

      <Drawer
        width="100%"
        title="Wei的網站"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={
          <Space>
           <Button icon={<CloseOutlined />} onClick={onClose} />
          </Space>
        }
      >
        <ul className='HeadNav-Menu-Bar-ul'>
          <Link to="/" onClick={onClose}><li className='HeadNav-Menu-Bar-li'>首頁</li></Link>
          <Link to="/" onClick={onClose}><li className='HeadNav-Menu-Bar-li'>聯絡我</li></Link>
        </ul>
      </Drawer>
      
    </div>
  );
}

export default Header;
