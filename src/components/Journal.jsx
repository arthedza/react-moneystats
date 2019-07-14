import React from 'react';
import { Menu, Icon, Affix, Button, Layout, List, Popover, PageHeader, Tabs, Table } from 'antd';



const Journal = function(p) {
    const data = [
      {
        title: 'Продукты и бакалея',
        total: 237
      },
      {
        title: 'Обеды',
        total: 89
      },
      {
        title: 'Транспортные карты',
        total: 100
      },
      {
        title: 'Кофе',
        total: 22
      },
      {
        title: 'Премия',
        total: 2200
      },
    ];
    return (
      <div >
        
        <div id="date">25 мая, суббота</div>
        <List id="transactions"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              /*avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}*/
              title={<a href="https://ant.design">{item.title}</a>}
              description="Наличные"
            /> <div id="total">-45</div>
          </List.Item>
        )}>
          
        </List>
      </div>
    )
  }

  export default Journal;
