holdingListChart.$inject = [ '$scope', '$http', '$modal', 'RowEditor', 'uiGridConstants' ];
function holdingListChart($scope, $http, $modal, RowEditor, uiGridConstants) {
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
		rowTemplate : "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row, 'holdingList-edit.html')\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
	};

	vm.serviceGrid.columnDefs = [ 
	{
		field : 'id',
		displayName : 'Id',
		enableSorting : true,
		type : 'number',
		enableCellEdit : false,
		width : 60,
		sort : {
			direction : uiGridConstants.ASC,
			priority : 1,
		},
	}, {
		field : 'strategy',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'capitalExposure',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'availableMargin',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'totalClosedProfit',
		enableSorting : true,
		enableCellEdit : false
	}, {
		field : 'strategyMetaData',
		enableSorting : true,
		enableCellEdit : false
	} ];

	/*
	var req = {
		method: 'POST',
		url: 'http://localhost:8080/TmesisAPI/',
		headers: {
			'Content-Type': 'application/json'
		},
		data: { function: 'getHoldingList', password: 'godMoney' }
	}
	$http(req).success(function(data, status) {
		vm.serviceGrid.data = data;
	})
	*/

	vm.serviceGrid.data = [
	{
		"id":35,
		"strategy":"Long"
	},
	{
		"id":36,
		"Account":"IB8888888",
		"InstrumentType":"FT",
		"TicketName":"cfe",
		"Strategy":"ShortSystem",
		"CapitalExposure":"200000",
		"AvailableMargin":"1234567",
		"TotalClosedProfit":"2332.23",
	}];

	$scope.addRow = function() {
		var newService = {
			"id" : "0"
		};
		var rowTmp = {};
		rowTmp.entity = newService;
		vm.editRow($scope.vm.serviceGrid, rowTmp, "holdingList-edit.html");
	};

}
