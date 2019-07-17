import React from 'react';
import { Menu, Icon} from 'antd';
import { Link} from 'react-router-dom';



const SideMenu = p => (
    <div >
      
      <Menu 
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1" onClick={() => p.navigateTo('journal')}>
          <Icon type="container" />
          <span>Журнал</span>
          <Link to='/journal'></Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={()=>p.navigateTo('accounts')}>
          <Icon type="credit-card" />
          <span>Счета</span>
          <Link to='/accounts'></Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={()=>p.navigateTo('spending')}>
          <Icon type="fall" />
          <span>Расходы</span>
          <Link to='/spending'></Link>
        </Menu.Item>
        <Menu.Item key="4" onClick={()=>p.navigateTo('income')}>
          <Icon type="rise" />
          <span>Доходы</span>
          <Link to='/income'></Link>
        </Menu.Item>
      </Menu>
    </div>
  )

  export default SideMenu;
