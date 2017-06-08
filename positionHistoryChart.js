positionHistoryChart.$inject = [ '$scope', '$http', '$modal', 'RowEditor', 'uiGridConstants' ];
function positionHistoryChart($scope, $http, $modal, RowEditor, uiGridConstants) {
	var vm = this;

	vm.editRow = RowEditor.editRow;

	vm.serviceGrid = {
		enableRowSelection : true,
		enableRowHeaderSelection : false,
		multiSelect : false,
		enableSorting : true,
		enableFiltering : true,
		enableColumnMenus: false,
		enableGridMenu : true,
		rowTemplate : "<div ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
	};

	vm.serviceGrid.columnDefs = [ 
	{
		field : 'brokerName',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'account',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'instrumentType',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'symbol',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'currency',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'actionType',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'position',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'price',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'orderTime',
		enableSorting : true,
		enableCellEdit : false
	} ];
	/*
	$http.get('http://127.0.0.1/data.json').success(function(response) {
		vm.serviceGrid.data = response;
	});
	*/

	vm.serviceGrid.data = [
	{
		"position":"EURUSD",
		"actionType":"BUY 5000",
	},
	{
		"position":"EURUSD",
		"actionType":"SELL 5000",
	}];
}
