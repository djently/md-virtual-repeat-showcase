import _ from 'lodash';
import generate from './DataGenerator';

const column = {
	cellTemplate: '<cell row="row" col="col" grid="grid"></cell>'
};

export default class GridCOntroller {
	constructor() {
		let emptyRows = [];

		_.times(15, () => emptyRows.push({}))

		this.data = [].concat(generate(5), emptyRows, generate(5) , emptyRows, generate(5));
	}
}