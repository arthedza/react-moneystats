import React from 'react';
import { DatePicker, Select, InputNumber, Input, Button } from 'antd';
import moment from 'moment';

const { Option } = Select;
const dateFormat = 'DD/MM/YYYY';

const categories = [
  'Продукты и бакалея',
  'Питание вне дома',
  'Образование',
  'Здоровье и гигиена',
  'Домашние питомцы',
  'Хобби',
  'Транспорт',
  'Коммунальные услуги',
  'Отдых и развлечения',
  'Банковские услуги',
  'Расходы на работу',
  'Подарки',
  'Прочие расходы',
]


export class TabInterface extends React.Component {
	constructor(props) {
    super(props);
    this.state = null;
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
        <label htmlFor="amount">Сумма:</label>
				<InputNumber id="amount"
					// defaultValue={1000}
          // placeholder="Сумма"
					formatter={(value) => `₴ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					parser={(value) => value.replace(/\₴\s?|(,*)/g, '')}
					onChange={this.onAmountChange}
				/>
        <label htmlFor="category">Категория:</label>
				<Select id="category"  style={{ width: 200 }} onChange={this.onCategoryChange}>
          {categories.map( category => (
            <Option key={category} value={category}>{category}</Option>
          ))}
					
				</Select>
				<br />
        <label htmlFor="date">Дата:</label>
				<DatePicker id="date" onChange={this.onDateChange}  format={dateFormat} />
				<br />
        <label htmlFor="notes">Примечание:</label>
				<Input id="notes" onChange={this.onCommentChange} placeholder="Basic usage" />
				<Button  type="primary" onClick={() => {
          this.props.onSave(this.state)
          console.log('save: ',this.state);

        }}>
					Добавить
				</Button>
			</div>
		);
	}
}
