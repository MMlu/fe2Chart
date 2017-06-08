acountInfoChart.$inject = [ '$scope', '$http', '$modal', 'RowEditor', 'uiGridConstants' ];
function acountInfoChart($scope, $http, $modal, RowEditor, uiGridConstants) {
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
		rowTemplate : "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row, 'accountInfo-edit.html')\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
	};

	vm.serviceGrid.columnDefs = [ {
		field : 'accountName',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'broker',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'availableFunds',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'buyingPower',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'updatedTime',
		enableSorting : true,
		enableCellEdit : false
	} ];
	
	var req = {
		method: 'POST',
		url: 'http://localhost:8080/TmesisAPI/',
		headers: {
			'Content-Type': 'application/json'
		},
		data: { function: 'getAccountInfo', password: 'godMoney' }
	}
	
	$http(req).success(function(data, status) {
		vm.serviceGrid.data = data;
	})
	
	/*
	vm.serviceGrid.data = [
   	{
		"id":1,
		"Account":"IB1234567",
		"AvailableBalance":"1000000",
		"ExposureWatchList":"100000",
		"ExposureHoldingList":"100000"
   	},
   	{
   		"id":2,
		"Account":"IB8888888",
		"AvailableBalance":"1000000",
		"ExposureWatchList":"100000",
		"ExposureHoldingList":"100000"
   	}];
	*/
}
