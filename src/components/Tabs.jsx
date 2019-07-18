import React from 'react';
import { DatePicker, Select, InputNumber, Input, Button } from 'antd';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const { MonthPicker, RangePicker } = DatePicker;




export class TabInterface extends React.Component {
	constructor(props) {
    super(props);
    this.state= null;
    this.onCategoryChange = value => {
      console.log(`selected ${value}`);
      console.log(this.state);
      this.setState(
        {
          category: value
        }
      )
    }
    this.onAmountChange = value => {
      console.log('changed', value);
      console.log(this.state);
      this.setState(
        {
          amount: value
        }
      )
    }
    this.onCommentChange = event => {
      console.log(`selected ${event.target.value}`);
      console.log(this.state);
      this.setState(
        {
          notes: event.target.value
        }
      )
    }
    this.onDateChange = value => {
      console.log('changed', value._d);
      console.log(this.state);
      this.setState(
        {
          date: value._d
        }
      )
    }
	}

	render() {
    //TODO: current date in datepicker
		return (
			<div className="TabInterface">
				<InputNumber id="amount"
					// defaultValue={1000}
          // placeholder="Сумма"
					formatter={(value) => `₴ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					parser={(value) => value.replace(/\₴\s?|(,*)/g, '')}
					onChange={this.onAmountChange}
				/>

				<Select id="category" defaultValue="lucy" style={{ width: 150 }} onChange={this.onCategoryChange}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="disabled" disabled>
						Disabled
					</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
				<br />
				<DatePicker id="date" onChange={this.onDateChange} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
				<br />
				<Input id="notes" onChange={this.onCommentChange} placeholder="Basic usage" />
				<Button type="primary" onClick={() => {
          this.props.onSave()
          console.log('save: ',this.state);

        }}>
					Primary
				</Button>
			</div>
		);
	}
}
