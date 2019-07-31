import React from 'react';
import { DatePicker, Select, InputNumber, Input, Button } from 'antd';

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
			let amountValid = this.state.validation.amountValid;
			let categoryValid = this.state.validation.categoryValid;
			let commentValid = this.state.validation.notesValid;
			let dateValid = this.state.validation.dateValid;

			switch (formName) {
				case 'amountForm':
					if (value && value.toString().match(/\d|(?<=-)\d/gm)) {
						amountValid = true;
					}
					break;
				case 'categoryForm':
					if (value) {
						categoryValid = true;
					}
					break;

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
		};
		this.onCategoryChange = (value) => {
			this.setState(
				{
					category: value
				},
				this.validateForm('categoryForm', value)
			);
		};
		this.onAmountChange = (value) => {
			this.setState(
				{
					amount: value
				},
				this.validateForm('amountForm', value)
			);
		};
		this.onCommentChange = (event) => {
			this.setState({
				notes: event.target.value
			});
		};
		this.onDateChange = (value) => {
			if (value) {
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
		return (
			<div className="TabInterface">
				<label htmlFor="amount">Сумма:</label>
				<InputNumber
					id="amount"
					formatter={(value) => `₴ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					parser={(value) => value.replace(/\₴\s?|(,*)/g, '')}
					onChange={this.onAmountChange}
				/>
				<br />
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
					}}
				>
					Добавить
				</Button>
			</div>
		);
	}
}
