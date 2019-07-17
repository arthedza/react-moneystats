import React from 'react';
import {  Icon, Affix, Button, Popover, Tabs } from 'antd';


const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }

const PopoverContent = (
    <div>
  
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane id="spending-tab" tab="Расход" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane id="income-tab" tab="Доход" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane id="transfer-tab" tab="Перевод" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );

const AffixButton = p => (
    <>
      <Affix className="AffixButton"/*offsetBottom={this.state.bottom}*/>
      <Popover content={PopoverContent} title="Новая операция" trigger="click">
      <Button
              type="primary"
              // onClick={() => {
              //   this.setState({
              //     bottom: this.state.bottom + 10,
              //   });
              // }}
            >
              <Icon id="add" type="plus"  />
              Добавить операцию
      </Button>
      </Popover>  
      
    </Affix>
    </>
    
  )

  export default AffixButton;
