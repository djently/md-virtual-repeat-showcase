import GridController from './GridController';
import {CellComponent} from './components/CellComponent/CellComponent';
import {RowComponent} from './components/RowComponent/RowComponent';

angular.module('gridTest', ['ngMaterial'])
	.controller('GridController', GridController)
	.component('cell', CellComponent)
	.component('row', RowComponent)
	;