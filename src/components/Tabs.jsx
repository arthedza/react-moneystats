import React from 'react';
import { DatePicker, Select, InputNumber, Input, Button } from 'antd';
// import moment from 'moment';

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
	'Прочие расходы'
];

export class TabInterface extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
			amount: '',
			notes: '',
			date: '',
			validation: {
				categoryValid: false,
				amountValid: false,
				notesValid: false,
				dateValid: false,
				formValid: false
			}
		};
		this.validateForm = (formName, value) => {
			// debugger
			let amountValid = this.state.validation.amountValid;
			let categoryValid = this.state.validation.categoryValid;
			let commentValid = this.state.validation.notesValid;
			let dateValid = this.state.validation.dateValid;

			switch (formName) {
				case 'amountForm':
					console.log('form:', formName);
					if (value && value.toString().match(/\d|(?<=-)\d/gm)) {
						amountValid = true; // TODO: letters!
					}
					break;
				case 'categoryForm':
					console.log('form:', formName);
					if (value) {
						// debugger
						categoryValid = true;
					}
					break;
				// case 'commentForm':
				//   if (value) {
				//     commentValid = true;
				//   }
				//   break;
				case 'dateForm':
					if (value) {
						dateValid = true;
					}
					break;

				default:
					break;
			}

			this.setState({
				validation: {
					categoryValid: categoryValid,
					amountValid: amountValid,
					notesValid: commentValid,
					dateValid: dateValid,
					formValid: categoryValid && amountValid && dateValid
				}
			});
			console.log('__validation: ', this.state.validation);
		};
		this.onCategoryChange = (value) => {
			console.log(`selected ${value}`);
			console.log(this.state);
			this.setState(
				{
					category: value
				},
				this.validateForm('categoryForm', value)
			);
		};
		this.onAmountChange = (value) => {
			console.log('changed', value);
			console.log(this.state);
			this.setState(
				{
					amount: value
				},
				this.validateForm('amountForm', value)
			);
		};
		this.onCommentChange = (event) => {
			console.log(`selected ${event.target.value}`);
			console.log(this.state);
			this.setState(
				{
					notes: event.target.value
				} /*, this.validateForm('commentForm', event.target.value)*/
			);
		};
		this.onDateChange = (value) => {
			if (value) {
				console.log('changed', value._d);
				console.log(this.state);
				this.setState(
					{
						date: value._d
					},
					this.validateForm('dateForm', value)
				);
			}
		};
	}

	render() {
		//TODO: current date in datepicker
		return (
			<div className="TabInterface">
				<label htmlFor="amount">Сумма:</label>
				<InputNumber
					id="amount"
					// defaultValue={1000}
					// placeholder="Сумма"
					formatter={(value) => `₴ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					parser={(value) => value.replace(/\₴\s?|(,*)/g, '')} //TODO: remove hryvnia's char
					onChange={this.onAmountChange}
				/>
        <br/>
				<label htmlFor="category">Категория:</label>
				<Select
					id="category"
					style={{ width: 200 }}
					onChange={this.onCategoryChange}
					placeholder="Выберите категорию"
				>
					{categories.map((category) => (
						<Option key={category} value={category}>
							{category}
						</Option>
					))}
				</Select>
				<br />
				<label htmlFor="date">Дата:</label>
				<DatePicker id="date" onChange={this.onDateChange} format={dateFormat} placeholder="Выберите дату" />
				<br />
				<label htmlFor="notes">Примечание:</label>
				<Input id="notes" onChange={this.onCommentChange} placeholder="Комментарий" />
				<Button
					disabled={this.state.validation.formValid ? false : true}
					type="primary"
					onClick={() => {
						this.props.onSave(this.state);
						console.log('save: ', this.state);
            
					}}
				>
					Добавить
				</Button>
			</div>
		);
	}
}
