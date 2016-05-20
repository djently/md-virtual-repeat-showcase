import template from './RowComponent.html';
import './RowComponent.css';

export const RowComponent = {
	bindings: {
		rowData: '<'
	},
	controller: function() {
		console.log(this.rowData);
	},
	template
};