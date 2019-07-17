import React from 'react';
import {  List } from 'antd';
import { store } from '../App';
import { fetchDataThunk} from '../App'; //TODO: !!!!!



// const data = [
//   {
//     title: 'Продукты и бакалея',
//     total: 237
//   },
//   {
//     title: 'Обеды',
//     total: 89
//   },
//   {
//     title: 'Транспортные карты',
//     total: 100
//   },
//   {
//     title: 'Кофе',
//     total: 22
//   },
//   {
//     title: 'Премия',
//     total: 2200
//   },
// ];


class Journal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    
  }

  componentWillMount() {
    store.dispatch(fetchDataThunk()) //TODO: !!!!!!
    console.log(this.props) //TODO:
  }

  render() {
    return (
      <div>
        {this.props.data.map(elem => (
          <div id="date">
            {elem.date}
            <List
              id="transactions"
              itemLayout="horizontal"
              dataSource={this.props.data}
              renderItem={elem => (
                <>
                  <List.Item>
                    <List.Item.Meta
                      // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<a href="https://ant.design">{elem.category}</a>}
                      description={elem.notes}
                    />
                    
                  </List.Item>
                  <div id="total">{elem.amount}</div>
                </>  
              )} 

              />
            
          </div>
          ))}
        
      </div>
    )
  }
}

// const Journal = function(p) {
    
//     return (
//       <div >
        
//         <div id="date">25 мая, суббота</div>
//         <List id="transactions"
//         itemLayout="horizontal"
//         dataSource={data}
//         renderItem={item => (
//           <List.Item>
//             <List.Item.Meta
//               /*avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}*/
//               title={<a href="https://ant.design">{item.title}</a>}
//               description="Наличные"
//             /> <div id="total">-45</div>
//           </List.Item>
//         )}>
          
//         </List>
//       </div>
//     )
//   }

  export default Journal;
