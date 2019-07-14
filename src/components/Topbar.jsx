import React from 'react';
import { Menu, Icon, Affix, Button, Layout, List, Popover, PageHeader, Tabs, Table } from 'antd';


const Topbar = p => (
    <div className="Title">
    <PageHeader onBack={() => null} title={p.route} subTitle="This is a subtitle" />
    </div>
  )

  export default Topbar;
  